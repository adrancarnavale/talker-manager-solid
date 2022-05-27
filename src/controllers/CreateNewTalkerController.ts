import { Request, Response } from 'express';
import { defaultErrorMessage } from '../constants';
import { CreateNewTalkerUseCase } from '../useCases';

export class CreateNewTalkerController {
  constructor(private createNewTalkerUseCase: CreateNewTalkerUseCase) {}

  async execute(req: Request, res: Response) {
    try {
      const { body: talkerInfos } = req;

      const newTalker = await this.createNewTalkerUseCase.execute(talkerInfos);

      return res.status(201).json(newTalker);
    } catch (err) {
      let message = defaultErrorMessage;
      if (err instanceof Error) message = err.message;

      return res.status(400).json({ message });
    }
  }
}
