import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RESTDataSource } from '@apollo/datasource-rest';
import { LoginRequest, RegisterRequest } from './user.dto';

@Injectable()
export class UserService extends RESTDataSource {
  constructor(private configService: ConfigService) {
    super();
    this.baseURL = `${this.configService.get<string>('apiService.account')}/auth/`;
  }

  async login(data: LoginRequest) {
    return this.post('login', { body: data });
  }

  async register(data: RegisterRequest) {
    return this.post('register', { body: data });
  }

  async generateToken(refreshToken: string) {
    return this.post('generate-token', { body: { refreshToken } });
  }

  async logout(userId: string) {
    return this.post('logout', { body: { userId } });
  }

  async currentUser(token: string) {
    return this.get('current-user', {
      headers: { Authorization: `Bearer ${token}` },
      cacheOptions: { ttl: 3600 },
    });
  }
}
