import { ICreateNewTalkerRepository } from '../repositories';
import { ITalker } from '../types';

export class CreateNewTalkerUseCase {
  constructor(private iCreateNewTalkerRepository: ICreateNewTalkerRepository) {}

  async execute(talkerInfos: ITalker) {
    const newTalker = await this.iCreateNewTalkerRepository.createNewTalker(
      talkerInfos
    );
    return newTalker;
  }
}
