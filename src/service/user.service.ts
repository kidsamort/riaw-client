import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../model/response/auth.response';
import { IUser } from '../model/IUser';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('user/all');
  }
}
