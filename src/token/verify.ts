import { JwtPayload, verify } from 'jsonwebtoken';
import 'dotenv/config';
import { defaultErrorMessage } from '../constants';

const { JWT_SECRET } = process.env;

export async function check(token: string): Promise<JwtPayload> {
  return new Promise((resolve, reject) => {
    try {
      verify(token, JWT_SECRET as string, (err, decoded) => {
        if (err) reject();

        resolve(decoded as JwtPayload);
      });
    } catch (err) {
      let message = defaultErrorMessage;

      if (err instanceof Error) message = err.message;

      throw new Error(message);
    }
  });
}
