import { CreateNewTalkerController } from '../controllers';
import { CreateNewTalkerImplementation } from '../implementations';
import { CreateNewTalkerUseCase } from '../useCases';

const createNewTalkerImplementation = new CreateNewTalkerImplementation();
const createNewTalkerUseCase = new CreateNewTalkerUseCase(
  createNewTalkerImplementation
);

export const createNewTalkerController = new CreateNewTalkerController(
  createNewTalkerUseCase
);
