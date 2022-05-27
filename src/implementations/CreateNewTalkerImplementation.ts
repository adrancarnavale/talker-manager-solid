import { read, write } from '../helpers';
import { ICreateNewTalkerRepository } from '../repositories';
import { ITalker } from '../types';

export class CreateNewTalkerImplementation
  implements ICreateNewTalkerRepository
{
  async createNewTalker(talkerInfos: Omit<ITalker, 'id'>) {
    const talkersList = await read();

    const id = talkersList.length + 1;

    const mountedTalker = {
      ...talkerInfos,
      id,
    };

    const newTalkersList = [...talkersList, mountedTalker];

    await write(newTalkersList);

    return mountedTalker;
  }
}
