import { IUpdateTalkerRepository } from '../repositories';
import { ITalker } from '../types';

export class UpdateTalkerUseCase {
  constructor(private iUpdateTalkerRepository: IUpdateTalkerRepository) {}

  async execute(talkerInfos: ITalker) {
    await this.iUpdateTalkerRepository.updateTalker(talkerInfos);
  }
}
