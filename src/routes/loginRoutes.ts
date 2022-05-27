import { Router } from 'express';
import { userLoginController } from '../integrations';

import { userLoginValidation } from '../middlewares';

export const loginRoutes = Router();

loginRoutes.post('/', userLoginValidation, (req, res) => {
  return userLoginController.execute(req, res);
});
