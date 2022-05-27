import { GetTalkerByIdController } from '../controllers';
import { GetTalkerByIdImplementation } from '../implementations';
import { GetTalkerByIdUseCase } from '../useCases';

const getTalkerByIdImplementation = new GetTalkerByIdImplementation();
const getTalkerByIdUseCase = new GetTalkerByIdUseCase(
  getTalkerByIdImplementation
);
export const getTalkerByIdController = new GetTalkerByIdController(
  getTalkerByIdUseCase
);
