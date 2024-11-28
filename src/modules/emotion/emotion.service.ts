import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  ClassifyEmotionRequest,
  // EmotionByIdRequest,
  VisualizeEmotionRequest,
} from './emotion.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmotionService {
  constructor(private configService: ConfigService) {}

  async classifyEmotion(data: ClassifyEmotionRequest) {
    const response = await axios.post(
      `${this.configService.get<string>('apiService.emotion')}/classify-emotion`,
      data,
    );

    return response.data;
  }

  async visualizeEmotion(data: VisualizeEmotionRequest) {
    const response = await axios.get(
      `${this.configService.get<string>('apiService.emotion')}/visualize-emotion?topic=${data.topic}&project_id=${data.project_id}&model_type=${data.model_type}`,
    );

    return response.data;
  }

  // async getEmotionByProjectId(data: EmotionByIdRequest) {
  //   const response = await axios.get(
  //     `${this.configService.get<string>('apiService.emotion')}/get-emotion-by-project-id?&project_id=${data.project_id}`,
  //   );

  //   return response.data;
  // }
}
