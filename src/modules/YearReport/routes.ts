import { Router } from 'express';
import YearReportController from './controllers/YearReportController';
import YearReportRepository from './repositories/YearReportRepository';
import YearReportService from './services/YearReportService';

const router = Router();

const repository = new YearReportRepository();
const service = new YearReportService(repository);
const controller = new YearReportController(service);

router.post('/', controller.create);

router.get('/', controller.find);

router.get('/:year', controller.findByYear);

router.delete('/:id', controller.delete);

export default router;