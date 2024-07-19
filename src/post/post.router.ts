import * as postController from './post.controller';
import { Router } from 'express';

const router = Router();

/**
 * 内容列表
 */
router.get('/posts', postController.index);

/**
 * 导出路由
 */
export default router;
