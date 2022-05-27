import { NextFunction, Request, Response } from 'express';
import { createTalkerSchema } from '../schemas';

export async function createNewTalkerValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { body: talkerInfo } = req;

  const { error } = createTalkerSchema.validate(talkerInfo);

  if (!error) return next();

  return res.status(400).json({ message: error.message });
}
