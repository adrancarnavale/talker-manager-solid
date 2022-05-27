import { read, write } from '../helpers';
import { IFindTalkerByNameRepository } from '../repositories';
import { ITalker } from '../types';

export class FindTalkerByNameImplementation
  implements IFindTalkerByNameRepository
{
  async findByName(nameSubstring: string): Promise<ITalker[]> {
    const talkersList = await read();

    if (!nameSubstring || nameSubstring === '') return talkersList;

    const talkersFound = talkersList.filter((talker: ITalker) =>
      talker.name.includes(nameSubstring)
    );

    await write(talkersFound);

    return talkersFound;
  }

  async findAll(): Promise<ITalker[]> {
    const talkersList = await read();

    return talkersList;
  }
}
