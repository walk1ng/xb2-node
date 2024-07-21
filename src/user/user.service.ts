import { UserModel } from './user.model';
import { connection } from '../app/database/mysql';

/**
 * 创建用户
 * @param user 用户数据
 * @returns
 */
export const createUser = async (user: UserModel) => {
  // 准备创建
  const statement = `
    INSERT INTO user
    SET ?
    `;

  // 执行创建
  const [data] = await connection.promise().query(statement, user);

  // 返回数据
  return data;
};