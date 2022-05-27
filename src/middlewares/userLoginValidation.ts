import { NextFunction, Request, Response } from 'express';
import { userLoginSchema } from '../schemas';

export async function userLoginValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { body: talkerInfos } = req;

  const { error } = userLoginSchema.validate(talkerInfos);

  if (!error) return next();

  return res.status(400).json({ message: error.message });
}
