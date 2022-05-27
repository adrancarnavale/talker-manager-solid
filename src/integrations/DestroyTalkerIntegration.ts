import { DestroyTalkerController } from '../controllers/DestroyTalkerController';
import { DestroyTalkerImplementation } from '../implementations';
import { DestroyTalkerUseCase } from '../useCases';

const destroyTalkerImplementation = new DestroyTalkerImplementation();
const destroyTalkerUsecase = new DestroyTalkerUseCase(
  destroyTalkerImplementation
);

export const destroyTalkerController = new DestroyTalkerController(
  destroyTalkerUsecase
);
