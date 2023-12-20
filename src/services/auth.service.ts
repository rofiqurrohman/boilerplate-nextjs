import { IUser } from '@/interfaces/user/user.interface';
import { HttpRequest } from './API.service';

export class AuthService {
  async signIn(identity: string, password: string) {
    const response = await HttpRequest.post<{ user: IUser; token: string }>(
      '/auth/sign-in',
      {
        identity,
        password,
      },
    );
    return response.data;
  }
}
