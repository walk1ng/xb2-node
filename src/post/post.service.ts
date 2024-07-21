import { connection } from '../app/database/mysql';
import { PostModel } from './post.model';

/**
 * 获取内容
 */
export const getPosts = async () => {
  const statement = `
    SELECT 
    post.id,
    post.title,
    post.content,
    JSON_OBJECT(
      'id', user.id,
      'name', user.name
    ) as user
    FROM post
    LEFT JOIN user
    ON post.userId = user.id
    ;
  `;

  const [data] = await connection.promise().query(statement);
  return data;
};

/**
 * 创建内容
 */
export const createPost = async (post: PostModel) => {
  // 准备查询
  const statement = `
  INSERT INTO post
  SET ?
  `;

  // 执行查询
  const [data] = await connection.promise().query(statement, post);

  // 返回数据
  return data;
};

/**
 * 更新内容
 */
export const updatePost = async (postId: number, post: PostModel) => {
  // 准备更新
  const statement = `
  UPDATE post
  SET ?
  WHERE id = ?
  `;

  // 执行更新
  const [data] = await connection.promise().query(statement, [post, postId]);

  // 返回数据
  return data;
};

/**
 * 删除内容
 */
export const deletePost = async (postId: number) => {
  // 准备删除
  const statement = `
  DELETE FROM post
  WHERE id = ?
  `;

  // 执行删除
  const [data] = await connection.promise().query(statement, postId);

  // 返回数据
  return data;
};
