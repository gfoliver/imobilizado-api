import { Router } from 'express';
import AreaController from './controllers/AreaController';
import AreaRepository from './repositories/AreaRepository';
import AreaService from './services/AreaService';

const router = Router();

const repository = new AreaRepository();
const service = new AreaService(repository);
const controller = new AreaController(service);

router.post('/', controller.create);

export default router;