import { ITalker } from '../types';

export interface IFindTalkerByNameRepository {
  findByName(nameSubstring: string): Promise<ITalker[]>;

  findAll(): Promise<ITalker[]>;
}
