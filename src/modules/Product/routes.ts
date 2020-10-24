import { Router } from 'express';
import multer from 'multer';
import ProductController from './controllers/ProductController';
import ProductRepository from './repositories/ProductRepository';
import ProductService from './services/ProductService';
import uploadConfig from '../../config/upload';

const upload = multer(uploadConfig);
const router = Router();

const repository = new ProductRepository();
const service = new ProductService(repository);
const controller = new ProductController(service);

router.post('/', upload.single('image'), controller.create);

router.post('/update', upload.single('image'), controller.update);

router.get('/', controller.find);

router.get('/code/:code', controller.findByCode);

router.delete('/delete/:code', controller.delete);

router.get('/patrimony', controller.patrimony);

export default router;