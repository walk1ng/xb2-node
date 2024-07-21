import { Request, Response, NextFunction } from 'express';
import { getPosts, createPost } from './post.service';

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

  try {
    const data = await createPost({ title, content });
    res.status(201).send(data);
  } catch (error) {
    // 异常处理
    next(error);
  }
};

export { index, store };
