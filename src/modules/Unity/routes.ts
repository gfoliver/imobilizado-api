import { Router } from 'express';
import UnityController from './controllers/UnityController';
import UnityRepository from './repositories/UnityRepository';
import UnityService from './services/UnityService';

const router = Router();

const repository = new UnityRepository();
const service = new UnityService(repository);
const controller = new UnityController(service);

router.post('/', controller.create);

router.get('/', controller.find);

router.get('/:id', controller.findById);

router.delete('/:id', controller.delete);

export default router;