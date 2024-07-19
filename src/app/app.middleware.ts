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
  let statusCode: number, message: string;
  switch (err.message) {
    default:
      statusCode = 500;
      message = '服务器发生了一些错误：' + err.message;
      break;
  }

  res.status(statusCode).send({ message });
};
