import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RequestContextMiddleware } from 'src/utils/RequestContextMiddleware';

@Injectable()
export class AxiosService {
  constructor(private readonly configService: ConfigService) {}

  createInstance(serviceName: string): AxiosInstance {
    const baseURL = this.configService.get<string>(`apiService.${serviceName}`);
    if (!baseURL) {
      throw new Error(`Base URL for ${serviceName} is not defined`);
    }

    const instance = axios.create({ baseURL });

    instance.interceptors.request.use(
      (config) => {
        const token = this.getBearerToken();

        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    return instance;
  }

  private getBearerToken(): string | null {
    const store = RequestContextMiddleware.get();
    return store?.get('bearerToken') || null;
  }
}
