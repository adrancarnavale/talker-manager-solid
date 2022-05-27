import { Request, Response } from 'express';
import { defaultErrorMessage } from '../constants';
import { GetTalkerByIdUseCase } from '../useCases';

export class GetTalkerByIdController {
  constructor(private getTalketByIdUseCase: GetTalkerByIdUseCase) {}

  async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const talker = await this.getTalketByIdUseCase.execute(id);

      return res.status(200).json(talker);
    } catch (err) {
      let message = defaultErrorMessage;
      if (err instanceof Error) message = err.message;
      return res.status(404).json({ message });
    }
  }
}
