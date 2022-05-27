import { UpdateTalkerController } from '../controllers';
import { UpdateTalkerImplementation } from '../implementations/UpdateTalkerImplementation';
import { UpdateTalkerUseCase } from '../useCases';

const updateTalkerImplementation = new UpdateTalkerImplementation();
const updateTalkerUseCase = new UpdateTalkerUseCase(updateTalkerImplementation);

export const updateTalkerController = new UpdateTalkerController(
  updateTalkerUseCase
);
