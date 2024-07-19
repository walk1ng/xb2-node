import dotenv from 'dotenv';

/**
 * 读取配置
 */
dotenv.config();

export const { APP_PORT } = process.env;
