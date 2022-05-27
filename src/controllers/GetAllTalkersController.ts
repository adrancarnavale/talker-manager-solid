import { Request, Response } from 'express';
import { defaultErrorMessage } from '../constants';
import { GetAllTalkersUseCase } from '../useCases';

export class GetAllTalkersController {
  constructor(private getAllTalkersUseCase: GetAllTalkersUseCase) {}

  async execute(_req: Request, res: Response): Promise<Response> {
    try {
      const talkersList = await this.getAllTalkersUseCase.execute();
      return res.status(200).json(talkersList);
    } catch (err) {
      let message = defaultErrorMessage;
      if (err instanceof Error) message = err.message;
      return res.status(400).json({ message });
    }
  }
}
