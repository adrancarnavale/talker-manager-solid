import { read, write } from '../helpers';
import { IdestroyTalkerRepository } from '../repositories';
import { ITalker } from '../types';

export class DestroyTalkerImplementation implements IdestroyTalkerRepository {
  async destroy(id: number): Promise<void> {
    const talkersList = await read();

    const filteredTalkers = talkersList.filter(
      (talker: ITalker) => talker.id !== id
    );

    await write(filteredTalkers);
  }
}
