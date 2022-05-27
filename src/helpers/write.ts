import { writeFile } from 'fs/promises';
import { defaultErrorMessage } from '../constants';
import { ITalker } from '../types';

export async function write(content: ITalker[]) {
  try {
    const formattedContent = JSON.stringify(content);
    await writeFile('talker.json', formattedContent);
  } catch (err) {
    let message = defaultErrorMessage;

    if (err instanceof Error) message = err.message;

    throw new Error(message);
  }
}
