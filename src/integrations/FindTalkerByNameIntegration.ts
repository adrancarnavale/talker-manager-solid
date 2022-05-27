import { FindTalkerByNameController } from '../controllers';
import { FindTalkerByNameImplementation } from '../implementations';
import { FindTalkerByNameUsecase } from '../useCases';

const findTalkerByNameImplementation = new FindTalkerByNameImplementation();
const findTalkerByNameUsecase = new FindTalkerByNameUsecase(
  findTalkerByNameImplementation
);

export const findTalkerByNameController = new FindTalkerByNameController(
  findTalkerByNameUsecase
);
