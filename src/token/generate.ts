import { sign } from 'jsonwebtoken';
import 'dotenv/config';
import { defaultErrorMessage } from '../constants';
import { IUserLogin } from '../types/IUserLogin';

const { JWT_SECRET } = process.env;

export async function generate(data: IUserLogin) {
  return new Promise((resolve, reject) => {
    try {
      sign(
        { data },
        JWT_SECRET as string,
        { expiresIn: '365d' },
        (err, token) => {
          if (err) reject();

          resolve(token);
        }
      );
    } catch (err) {
      let message = defaultErrorMessage;

      if (err instanceof Error) message = err.message;

      throw new Error(message);
    }
  });
}

// jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, function(err, token) {
//   console.log(token);
// });
