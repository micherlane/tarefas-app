import { Router } from 'express';
import { TaskCreateController } from './controllers/task/TaskCreateController';

const router = Router();

router.post('/tasks', new TaskCreateController().handle);

export { router }