import { ITalker } from '../types';

export interface IUpdateTalkerRepository {
  updateTalker(talkerInfo: ITalker): Promise<ITalker>;
}
