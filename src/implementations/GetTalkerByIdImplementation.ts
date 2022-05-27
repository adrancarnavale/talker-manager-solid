import { read } from '../helpers';
import { IGetTalkerByIdRepository } from '../repositories';
import { ITalker } from '../types';

export class GetTalkerByIdImplementation implements IGetTalkerByIdRepository {
  async getById(talkerId: string): Promise<ITalker> {
    const talkersList = await read();
    const talker = talkersList.find(
      (talker: ITalker) => talker.id === Number(talkerId)
    );

    return talker;
  }
}
