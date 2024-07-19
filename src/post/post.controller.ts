import { Request, Response, NextFunction } from 'express';
import { getPosts } from './post.service';

/**
 * 内容列表
 * @param req
 * @param res
 * @param next
 */
const index = (req: Request, res: Response, next: NextFunction) => {
  const posts = getPosts();
  res.send(posts);
};

export { index };
