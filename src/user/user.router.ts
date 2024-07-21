import * as userController from './user.controller';
import { Router } from 'express';

const router = Router();

/**
 * 创建用户
 */
router.post('/user', userController.store);

// 导出 user router
export default router;
