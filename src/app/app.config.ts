import dotenv from 'dotenv';

/**
 * 读取配置
 */
dotenv.config();

/**
 * 服务器端口
 */
export const { APP_PORT } = process.env;

/**
 * 数据库配置
 */
export const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;
