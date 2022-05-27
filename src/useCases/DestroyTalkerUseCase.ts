import { IdestroyTalkerRepository } from '../repositories';

export class DestroyTalkerUseCase {
  constructor(private iDestroyTalkerRepository: IdestroyTalkerRepository) {}

  async execute(id: number) {
    await this.iDestroyTalkerRepository.destroy(id);
  }
}
