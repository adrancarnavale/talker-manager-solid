import { GetAllTalkersImplementation } from '../implementations';
import { GetAllTalkersUseCase } from '../useCases';
import { GetAllTalkersController } from '../controllers';

const getAllTalkersImplementation = new GetAllTalkersImplementation();

const getAllTalkersUseCase = new GetAllTalkersUseCase(
  getAllTalkersImplementation
);

export const getAllTalkersController = new GetAllTalkersController(
  getAllTalkersUseCase
);
