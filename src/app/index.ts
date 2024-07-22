import express from 'express';
import postRouter from '../post/post.router';
import { defaultErrorHandler } from './app.middleware';
import userRouter from '../user/user.router';
import authRouter from '../auth/auth.router';

/**
 * 创建 express 实例
 */
const app = express();

/**
 * 配置 express 中间件
 */
app.use(express.json());

/**
 * 路由
 */
app.use(postRouter, userRouter, authRouter);

/**
 * 默认异常处理
 */
app.use(defaultErrorHandler);

/**
 * 导出 app
 */
export default app;
