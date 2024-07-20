import { Request, Response, NextFunction } from 'express';
import { getPosts } from './post.service';

/**
 * 内容列表
 * @param req
 * @param res
 * @param next
 */
const index = async (req: Request, res: Response, next: NextFunction) => {
  const posts = await getPosts();
  res.send(posts);
};

export { index };
