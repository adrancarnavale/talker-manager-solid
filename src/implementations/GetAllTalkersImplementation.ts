import { read } from '../helpers';
import { IGetAllTalkersRepository } from '../repositories';
import { ITalker } from '../types';

export class GetAllTalkersImplementation implements IGetAllTalkersRepository {
  async getAll(): Promise<ITalker[]> {
    const talkersList = await read();
    return talkersList;
  }
}
