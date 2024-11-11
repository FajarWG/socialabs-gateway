import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { LoginRequest, RegisterRequest } from './user.dto';

@Injectable()
export class UserService {
  private readonly userApiUrl = 'http://localhost:3000';

  async login(data: LoginRequest) {
    const response = await axios.post(`${this.userApiUrl}/auth/login`, data);
    return response.data;
  }

  async register(data: RegisterRequest) {
    const response = await axios.post(`${this.userApiUrl}/auth/register`, data);
    return response.data;
  }

  async generateToken(user: any) {
    const response = await axios.post(`${this.userApiUrl}/auth/token`, user);
    return response.data;
  }

  async logout(userId: string) {
    const response = await axios.post(`${this.userApiUrl}/auth/logout`, {
      userId,
    });
    return response.data;
  }
}
