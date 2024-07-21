import * as userController from './user.controller';
import { Router } from 'express';
import { validateUserData, hashPassword } from './user.middleware';

const router = Router();

/**
 * 创建用户
 */
router.post('/user', validateUserData, hashPassword, userController.store);

// 导出 user router
export default router;
