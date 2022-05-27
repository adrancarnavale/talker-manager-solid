import { readFile } from 'fs/promises';
import { defaultErrorMessage } from '../constants';

export async function read() {
  try {
    const data = await readFile('talker.json', { encoding: 'utf8' });

    return JSON.parse(data);
  } catch (err) {
    let message = defaultErrorMessage;

    if (err instanceof Error) message = err.message;
    throw new Error(message);
  }
}
