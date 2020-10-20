import { Router } from 'express';
import userRouter from './modules/User/routes';
import productRouter from './modules/Product/routes';
import areaRouter from './modules/Area/routes';
import verifyToken from './middlewares/verifyToken';

const router = Router();

router.use('/user', userRouter);
router.use('/product', verifyToken, productRouter);
router.use('/area', verifyToken, areaRouter);

export default router;