import { Request, Response } from 'express';
import { defaultErrorMessage } from '../constants';
import { generate } from '../token';
import { UserLoginUseCase } from '../useCases';

export class UserLoginController {
  constructor(private userLoginUseCase: UserLoginUseCase) {}

  async execute(req: Request, res: Response) {
    try {
      const { body: talkerInfos } = req;

      await this.userLoginUseCase.execute(talkerInfos);

      const token = await generate(talkerInfos);

      return res.status(200).json({ token });
    } catch (err) {
      let message = defaultErrorMessage;

      if (err instanceof Error) message = err.message;

      return res.status(400).json({ message });
    }
  }
}
