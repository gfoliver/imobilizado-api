import { Router } from 'express';
import userRouter from './modules/User/routes';

const router = Router();

router.use('/user', userRouter);

export default router;