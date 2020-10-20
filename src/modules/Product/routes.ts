import { Router } from 'express';
import ProductController from './controllers/ProductController';
import ProductRepository from './repositories/ProductRepository';
import ProductService from './services/ProductService';

const router = Router();

const repository = new ProductRepository();
const service = new ProductService(repository);
const controller = new ProductController(service);

router.post('/', controller.create);

export default router;