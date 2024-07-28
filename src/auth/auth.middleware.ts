import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as userService from '../user/user.service';
import { PUBLIC_KEY } from '../app/app.config';
import { TokenPayload } from './auth.interface';
import { possess } from './auth.service';

/**
 * 验证用户登录数据
 */
export const validateLoginData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('👮🏻验证用户登录数据');

  // 准备数据
  const { name, password } = req.body;

  // 验证数据
  if (!name) return next(new Error('NAME_IS_REQUIRED'));
  if (!password) return next(new Error('PASSWORD_IS_REQUIRED'));

  // 验证用户是否存在
  const user = await userService.getUserByName(name, { password: true });
  if (!user) return next(new Error('USER_DOES_NOT_EXIST'));

  // 验证密码匹配
  const matched = await bcrypt.compare(password, user.password);
  if (!matched) return next(new Error('PASSWORD_DOES_NOT_MATCH'));

  // 在request body中添加user
  req.body.user = user;

  // 下一步
  next();
};

/**
 * 验证用户身份
 */
export const authGuard = (req: Request, res: Response, next: NextFunction) => {
  console.log('👮🏻验证用户身份');

  try {
    // 提取 authorization
    const authorization = req.header('authorization');
    if (!authorization) throw new Error();

    // 提取 JWT 令牌
    const token = authorization.replace('Bearer ', '');
    if (!token) throw new Error();

    // 验证令牌并获取payload数据, 这里是用户信息
    const decode = jwt.verify(token, PUBLIC_KEY, { algorithms: ['RS256'] });

    // 在request中添加用户信息
    req.user = decode as TokenPayload;

    // 下一步
    next();
  } catch (error) {
    next(new Error('UNAUTHORIZED'));
  }
};

/**
 * 访问控制
 */
interface AccessControlOptions {
  possession?: boolean;
}

export const accessControl = (options: AccessControlOptions) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log('👮🏻访问控制');

    // 解析选项
    const { possession } = options;

    // 获取用户id
    const { id: userId } = req.user;

    // 超级管理员特权
    if (userId === 1) return next();

    // 解析资源
    const resourceIdParam = Object.keys(req.params)[0];
    console.log('resourceIdParam:', resourceIdParam);

    const resourceType = resourceIdParam.replace('Id', '');
    const resourceId = parseInt(req.params[resourceIdParam], 10);

    // 如果需要做访问控制
    if (possession) {
      try {
        const ownResource = await possess({ userId, resourceType, resourceId });
        if (!ownResource) throw new Error('USER_DOES_NOT_OWN_RESOURCE');
      } catch (error) {
        return next(error);
      }
    }

    // 下一步
    next();
  };
};
