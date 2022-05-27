import { Router } from 'express';
import {
  getAllTalkersController,
  getTalkerByIdController,
  destroyTalkerController,
  findTalkerByNameController,
} from '../integrations';
import { createNewTalkerController } from '../integrations';
import { updateTalkerController } from '../integrations/UpdateTalkerIntegration';
import { createNewTalkerValidation, tokenValidation } from '../middlewares';

export const talkerRoutes = Router();

talkerRoutes
  .get('/search', tokenValidation, (req, res) => {
    return findTalkerByNameController.execute(req, res);
  })
  .get('/:id', (req, res) => {
    return getTalkerByIdController.execute(req, res);
  })
  .get('/', (req, res) => {
    return getAllTalkersController.execute(req, res);
  })
  .put('/:id', tokenValidation, createNewTalkerValidation, (req, res) => {
    return updateTalkerController.execute(req, res);
  })
  .delete('/:id', tokenValidation, (req, res) => {
    return destroyTalkerController.execute(req, res);
  })
  .post('/', tokenValidation, createNewTalkerValidation, (req, res) => {
    return createNewTalkerController.execute(req, res);
  });
