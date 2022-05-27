import { IUserLoginRepository } from '../repositories';
import { IUserLoginDTO } from '../DTOs';

export class UserLoginUseCase {
  constructor(private userLoginRepository: IUserLoginRepository) {}

  async execute(userLoginInfos: IUserLoginDTO) {
    await this.userLoginRepository.createTalker(userLoginInfos);
  }
}
