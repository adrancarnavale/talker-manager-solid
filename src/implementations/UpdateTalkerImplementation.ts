import { read, write } from '../helpers';
import { IUpdateTalkerRepository } from '../repositories';
import { ITalker } from '../types';

export class UpdateTalkerImplementation implements IUpdateTalkerRepository {
  async updateTalker(talkerInfo: ITalker): Promise<ITalker> {
    const { id } = talkerInfo;

    const talkersList = await read();

    let talkerToBeUpdated = talkersList.find(
      (talker: ITalker) => talker.id === Number(id)
    );

    Object.assign(talkerToBeUpdated, talkerInfo);

    await write(talkersList);

    return talkerToBeUpdated;
  }
}
