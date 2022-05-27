import { IFindTalkerByNameRepository } from '../repositories';

export class FindTalkerByNameUsecase {
  constructor(
    private iFindTalkerByNameRepository: IFindTalkerByNameRepository
  ) {}

  async execute(nameSubstring: string) {
    if (!nameSubstring || nameSubstring === '')
      await this.iFindTalkerByNameRepository.findAll();

    const foundTalkers = await this.iFindTalkerByNameRepository.findByName(
      nameSubstring
    );

    return foundTalkers;
  }
}
