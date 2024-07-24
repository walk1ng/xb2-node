import { Request, Response, NextFunction } from 'express';

/**
 * 打印路由信息的中间件
 * @param req
 * @param res
 * @param next
 */
export const requestUrl = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url);
  next();
};

/**
 * 默认的异常处理器
 * @param err
 * @param req
 * @param res
 * @param next
 */
export const defaultErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err.message) {
    console.log('😵:', err.message);
  }
  let statusCode: number, message: string;
  switch (err.message) {
    case 'NAME_IS_REQUIRED':
      statusCode = 400;
      message = '请提供用户名';
      break;
    case 'PASSWORD_IS_REQUIRED':
      statusCode = 400;
      message = '请提供用户密码';
      break;
    case 'USER_ALREADY_EXIST':
      statusCode = 409;
      message = '用户已存在';
      break;
    case 'USER_DOES_NOT_EXIST':
      statusCode = 400;
      message = '用户不存在';
      break;
    case 'PASSWORD_DOES_NOT_MATCH':
      statusCode = 400;
      message = '密码不正确';
      break;
    case 'UNAUTHORIZED':
      statusCode = 401;
      message = '请先登录';
      break;
    default:
      statusCode = 500;
      message = '服务器发生了一些错误：' + err.message;
      break;
  }

  res.status(statusCode).send({ message });
};
