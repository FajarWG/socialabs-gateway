import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PromptRequest, QueryRequest } from './chatbot.dto';

@Injectable()
export class ChatbotService {
  private readonly chatbotApiUrl = 'http://localhost:9100';

  async getPrompt(data: PromptRequest) {
    const response = await axios.get(
      `${this.chatbotApiUrl}/prompt?project_id=${data.project_id}`,
    );

    return response.data;
  }

  async query(data: QueryRequest) {
    const response = await axios.post(`${this.chatbotApiUrl}/chat`, data);
    return response.data;
  }
}
