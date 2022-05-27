import { NextFunction, Request, Response } from 'express';
import { defaultErrorMessage } from '../constants';
import { check } from '../token';
import { IUserLogin } from '../types';

export async function tokenValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization: token } = req.headers;

    if (!token)
      return res.status(401).json({ message: 'Token não encontrado' });

    await check(token as string);

    next();
  } catch (err) {
    let message = defaultErrorMessage;

    if (err instanceof Error) message = err.message;

    return res.status(401).json({ message: 'Token inválido' });
  }
}
