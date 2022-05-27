import { Talker } from '../entities';

export interface IGetAllTalkersRepository {
  getAll(): Promise<Talker[]>;
}
