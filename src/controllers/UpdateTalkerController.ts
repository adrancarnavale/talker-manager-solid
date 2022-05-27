import { Request, Response } from 'express';
import { defaultErrorMessage } from '../constants';
import { UpdateTalkerUseCase } from '../useCases';

export class UpdateTalkerController {
  constructor(private updateTalkeUseCase: UpdateTalkerUseCase) {}

  async execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { body: talkerInfos } = req;

      const talker = {
        id: Number(id),
        ...talkerInfos,
      };

      await this.updateTalkeUseCase.execute(talker);

      return res.status(200).json(talker);
    } catch (err) {
      let message = defaultErrorMessage;
      if (err instanceof Error) message = err.message;

      return res.status(400).json({ message });
    }
  }
}
