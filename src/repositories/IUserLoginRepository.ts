import { IUserLogin } from '../types';

export interface IUserLoginRepository {
  createTalker(userLoginInfos: IUserLogin): Promise<void>;
}
