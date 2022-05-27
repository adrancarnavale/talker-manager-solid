import { Request, Response } from 'express';
import { defaultErrorMessage } from '../constants';
import { DestroyTalkerUseCase } from '../useCases';

export class DestroyTalkerController {
  constructor(private destroyTalkerUseCase: DestroyTalkerUseCase) {}

  async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.destroyTalkerUseCase.execute(Number(id));

      return res.status(204).end();
    } catch (err) {
      let message = defaultErrorMessage;

      if (err instanceof Error) message = err.message;

      return res.status(400).json({ message });
    }
  }
}
