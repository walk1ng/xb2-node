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
  const { name, password } = req.body;

  try {
    // 发送响应
    res.send({ message: `欢迎回来，${name}` });
  } catch (error) {
    next(error);
  }
};
