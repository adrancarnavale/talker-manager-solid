import { Request, Response } from 'express';
import { defaultErrorMessage } from '../constants';
import { FindTalkerByNameUsecase } from '../useCases';

export class FindTalkerByNameController {
  constructor(private findTalkerByNameUseCase: FindTalkerByNameUsecase) {}

  async execute(req: Request, res: Response) {
    try {
      const { q: nameSubstring } = req.query;

      const talkersFound = await this.findTalkerByNameUseCase.execute(
        nameSubstring as string
      );

      return res.status(200).json(talkersFound);
    } catch (err) {
      let message = defaultErrorMessage;

      if (err instanceof Error) message = err.message;

      return res.status(401).json({ message });
    }
  }
}
