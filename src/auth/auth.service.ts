import jwt from 'jsonwebtoken';
import { PRIVATE_KEY } from '../app/app.config';
import { connection } from '../app/database/mysql';

/**
 * 签发信息
 */
interface SignTokenOptions {
  payload?: any;
}

export const signToken = (options: SignTokenOptions) => {
  console.log('👮🏻‍♀️ 签发token');

  // 准备选项
  const { payload } = options;

  // 签发token
  const token = jwt.sign(payload, PRIVATE_KEY, { algorithm: 'RS256' });

  // 提供token
  return token;
};

/**
 * 检查用户是否拥有某个资源
 */
interface PossessOptions {
  userId: number;
  resourceId: number;
  resourceType: string;
}

export const possess = async (options: PossessOptions) => {
  // 准备选项
  const { userId, resourceId, resourceType } = options;

  // 准备查询
  const statement = `
  SELECT COUNT(${resourceType}.id) AS count
  FROM ${resourceType}
  WHERE ${resourceType}.id = ? AND userId = ?
  `;

  // 执行查询
  const [data] = await connection
    .promise()
    .query(statement, [resourceId, userId]);

  // 返回检查结果
  return data[0].count > 0;
};
