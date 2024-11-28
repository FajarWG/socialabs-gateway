import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { LoginRequest, RegisterRequest } from './user.dto';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(private configService: ConfigService) {}

  async login(data: LoginRequest) {
    // const response = await axios.post(
    //   `${this.configService.get<string>('apiService.account')}/auth/login`,
    //   data,
    // );

    // return response.data;

    try {
      const response = await axios.post(
        `${this.configService.get<string>('apiService.account')}/auth/login`,
        data,
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Error',
        error.response?.status || 500,
      );
    }
  }

  async register(data: RegisterRequest) {
    try {
      const response = await axios.post(
        `${this.configService.get<string>('apiService.account')}/auth/register`,

        data,
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Error',
        error.response?.status || 500,
      );
    }
  }

  async generateToken(refreshToken: string) {
    console.log(refreshToken);
    const response = await axios.post(
      `${this.configService.get<string>('apiService.account')}/auth/generate-token`,
      refreshToken,
    );

    console.log(response.data);

    return response.data;
  }

  async logout(userId: string) {
    const response = await axios.post(
      `${this.configService.get<string>('apiService.account')}/auth/logout`,
      {
        userId,
      },
    );
    return response.data;
  }

  async currentUser(token: string) {
    const response = await axios.get(
      `${this.configService.get<string>('apiService.account')}/auth/current-user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  }
}
