import { Router } from 'express';
import UserController from './controllers/UserController';
import UserRepository from './repositories/UserRepository';
import UserService from './services/UserService';

const router = Router();

const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UserController(service);

router.post('/', controller.create);

export default router;