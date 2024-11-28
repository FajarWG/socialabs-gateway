import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PromptRequest, QueryRequest } from './chatbot.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ChatbotService {
  constructor(private configService: ConfigService) {}

  async getPrompt(data: PromptRequest) {
    const response = await axios.get(
      `${this.configService.get<string>('apiService.chatbot')}/prompt?project_id=${data.project_id}`,
    );

    return response.data;
  }

  async query(data: QueryRequest) {
    const response = await axios.post(
      `${this.configService.get<string>('apiService.chatbot')}/chat`,
      data,
    );
    return response.data;
  }
}
