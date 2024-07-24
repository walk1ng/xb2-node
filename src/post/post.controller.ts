import { Request, Response, NextFunction } from 'express';
import { getPosts, createPost, updatePost, deletePost } from './post.service';
import _ from 'lodash';

/**
 * 内容列表
 * @param req
 * @param res
 * @param next
 */
const index = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await getPosts();
    res.send(posts);
  } catch (error) {
    next(error);
  }
};

/**
 * 创建内容
 */
const store = async (req: Request, res: Response, next: NextFunction) => {
  // 准备数据
  const { title, content } = req.body;
  // 从请求中解析找到用户id
  const { id: userId } = req.user;

  try {
    const data = await createPost({ title, content, userId });
    res.status(201).send(data);
  } catch (error) {
    // 异常处理
    next(error);
  }
};

/**
 * 更新内容
 */
const update = async (req: Request, res: Response, next: NextFunction) => {
  // 准备数据
  const post = _.pick(req.body, ['title', 'content']);
  const { postId } = req.params;

  try {
    const data = await updatePost(parseInt(postId), post);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

/**
 * 删除内容
 */
const destroy = async (req: Request, res: Response, next: NextFunction) => {
  // 获取内容id
  const { postId } = req.params;

  try {
    const data = await deletePost(parseInt(postId));
    res.send(data);
  } catch (error) {
    next(error);
  }
};

export { index, store, update, destroy };
