import { ITalker } from '../types';

export interface ICreateNewTalkerRepository {
  createNewTalker(talkerInfos: ITalker): Promise<ITalker>;
}
