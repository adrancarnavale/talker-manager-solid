import { ITalker } from '../types';

export interface IGetTalkerByIdRepository {
  getById(talkerId: string): Promise<ITalker>;
}
