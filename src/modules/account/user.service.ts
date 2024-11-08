import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { User } from './user.model';

@Injectable()
export class UserService {
  private readonly userApiUrl = 'https://dummyjson.com/users';

  async getUserByEmail(id: string): Promise<User> {
    const response = await axios.get(`${this.userApiUrl}/${id}`);
    return response.data;
  }

  async createNewUser(user: User): Promise<User> {
    const response = await axios.post(this.userApiUrl, user);
    return response.data;
  }

  async updateRefreshToken(id: string, refreshToken: string): Promise<User> {
    const response = await axios.patch(`${this.userApiUrl}/${id}`, {
      refreshToken,
    });
    return response.data;
  }
}
