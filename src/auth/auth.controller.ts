import { Request, Response, NextFunction } from 'express';
import * as authService from './auth.service';

/**
 * 用户登录
 */
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // 准备数据
  const {
    user: { id, name },
  } = req.body;

  // 准备签发令牌的payload
  const payload = { id, name };

  try {
    // 签发令牌
    const token = authService.signToken({ payload });

    // 发送响应
    res.send({ id, name, token });
  } catch (error) {
    next(error);
  }
};

/**
 * 验证用户登录状态
 */
export const validate = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.user);
  res.sendStatus(200);
};
