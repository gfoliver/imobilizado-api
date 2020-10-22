import { Router } from 'express';
import ProductController from './controllers/ProductController';
import ProductRepository from './repositories/ProductRepository';
import ProductService from './services/ProductService';

const router = Router();

const repository = new ProductRepository();
const service = new ProductService(repository);
const controller = new ProductController(service);

router.post('/', controller.create);

router.post('/update', controller.update);

router.get('/', controller.find);

router.get('/:code', controller.findByCode);

router.delete('/:code', controller.delete);

export default router;