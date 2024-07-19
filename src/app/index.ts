import express from 'express';

/**
 * 创建 express 实例
 */
const app = express();

/**
 * 配置 express 中间件
 */
app.use(express.json());

/**
 * 导出 app
 */
export default app;
