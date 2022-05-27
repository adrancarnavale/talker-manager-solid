import { IGetAllTalkersRepository } from '../repositories';

export class GetAllTalkersUseCase {
  constructor(private iGetAllTalkersRepository: IGetAllTalkersRepository) {}

  async execute() {
    const talkersList = await this.iGetAllTalkersRepository.getAll();
    return talkersList;
  }
}
