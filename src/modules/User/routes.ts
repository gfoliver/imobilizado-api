import { Router } from 'express';
import UserController from './controllers/UserController';
import UserRepository from './repositories/UserRepository';
import UserService from './services/UserService';
import AuthController from './controllers/AuthController';
import AuthService from './services/AuthService';
import verifyToken from '../../middlewares/verifyToken';

const router = Router();

const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UserController(service);

const authService = new AuthService(repository);
const authController = new AuthController(authService);

router.get('/', verifyToken, controller.find);

router.get('/pending', verifyToken, controller.pendingApproval);

router.get('/:id', verifyToken, controller.findById);

router.delete('/:id', verifyToken, controller.delete);

router.post('/', controller.create);

router.post('/approve', controller.approve);

router.post('/login', authController.login);

export default router;