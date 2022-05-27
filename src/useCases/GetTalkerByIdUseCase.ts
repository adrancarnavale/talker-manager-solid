import { IGetTalkerByIdRepository } from '../repositories';
import { ITalker } from '../types';

export class GetTalkerByIdUseCase {
  constructor(private iGetTalkerByIdRepository: IGetTalkerByIdRepository) {}

  async execute(id: string): Promise<ITalker> {
    const talker = await this.iGetTalkerByIdRepository.getById(id);

    if (!talker) throw new Error('Pessoa palestrante não encontrada');

    return talker;
  }
}
