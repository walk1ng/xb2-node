import { Request, Response, NextFunction } from 'express';
import * as userService from './user.service';
import { UserModel } from './user.model';

/**
 * 创建用户
 * @param req
 * @param res
 * @param next
 */
export const store = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // 准备数据
  const { name, password } = req.body;

  try {
    // 创建用户
    const data = await userService.createUser({ name, password });
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};
