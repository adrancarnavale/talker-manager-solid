import { talkerRoutes } from './talkerRoutes';
import { loginRoutes } from './loginRoutes';
import { Router } from 'express';

export const routes = Router();

routes.use('/talker', talkerRoutes);
routes.use('/login', loginRoutes);
