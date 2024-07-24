import jwt from 'jsonwebtoken';
import { PRIVATE_KEY } from '../app/app.config';

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
