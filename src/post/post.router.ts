import * as postController from './post.controller';
import { Router } from 'express';
import { requestUrl } from '../app/app.middleware';

/**
 * 路由实例
 */
const router = Router();

/**
 * 内容列表
 */
router.get('/posts', requestUrl, postController.index);

/**
 * 创建内容
 */
router.post('/posts', postController.store);

/**
 * 导出路由
 */
export default router;
