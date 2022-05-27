import { read } from '../helpers';
import { IUserLoginRepository } from '../repositories';
import { IUserLogin } from '../types/IUserLogin';

export class UserLoginImplementation implements IUserLoginRepository {
  async createTalker(_talkerInfos: IUserLogin): Promise<void> {
    const talkersList = await read();

    return talkersList;
  }
}
