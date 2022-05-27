import { UserLoginController } from '../controllers';
import { UserLoginImplementation } from '../implementations';
import { UserLoginUseCase } from '../useCases';

const userLoginImplementation = new UserLoginImplementation();

const userLoginUseCase = new UserLoginUseCase(userLoginImplementation);

export const userLoginController = new UserLoginController(userLoginUseCase);
