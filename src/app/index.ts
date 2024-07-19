import express from 'express';
import postRouter from '../post/post.router';

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
app.use(postRouter);

/**
 * 导出 app
 */
export default app;
