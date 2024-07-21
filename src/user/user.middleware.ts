import { Request, Response, NextFunction } from 'express';
import * as userService from './user.service';

/**
 * 验证用户数据
 */
export const validateUserData = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('👮🏻 验证用户数据');

  // 准备数据
  const { name, password } = req.body;

  // 验证数据
  if (!name) return next(new Error('NAME_IS_REQUIRED'));
  if (!password) return next(new Error('PASSWORD_IS_REQUIRED'));

  // 验证用户是否存在
  const user = await userService.getUserByName(name);
  if (user) return next(new Error('USER_ALREADY_EXIST'));

  // 下一步
  next();
};
