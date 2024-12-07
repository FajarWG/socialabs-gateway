import { HttpException, Injectable } from '@nestjs/common';
import { PromptRequest, QueryRequest } from './chatbot.dto';

import { AxiosService } from 'src/utils/AxiosService';

@Injectable()
export class ChatbotService {
  constructor(private readonly axiosService: AxiosService) {}

  async query(data: QueryRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('chatbot');
      const response = await axiosInstance.post('/chat', {
        data,
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.response?.data || 'Service Chatbot Error',
        error.response?.status || 500,
      );
    }
  }

  async getPrompt(data: PromptRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('chatbot');
      const response = await axiosInstance.get('/prompt', {
        params: { project_id: data.project_id },
      });

      return response.data.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Chatbot Error',
        error.response?.status || 500,
      );
    }
  }
}
