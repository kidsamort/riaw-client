import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../model/response/auth.response';

export default class AuthService {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('auth/signin', { email, password });
  }

  static async registration(
    email: string,
    name: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('auth/signup', { email, name, password });
  }

  static async logout(): Promise<void> {
    return $api.post('auth/logout');
  }
}
