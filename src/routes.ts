import express from 'express';
import userRouter from './modules/User/routes';
import productRouter from './modules/Product/routes';
import areaRouter from './modules/Area/routes';
import unityRouter from './modules/Unity/routes';
import yearReportRouter from './modules/YearReport/routes';

import verifyToken from './middlewares/verifyToken';
import { filesFolder } from './config/upload'

const router = express.Router();

router.use('/user', userRouter);
router.use('/product', verifyToken, productRouter);
router.use('/area', verifyToken, areaRouter);
router.use('/unity', verifyToken, unityRouter);
router.use('/storage', express.static(filesFolder));
router.use('/yearReport', verifyToken, yearReportRouter);

export default router;