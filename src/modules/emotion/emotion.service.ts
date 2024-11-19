import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  ClassifyEmotionRequest,
  EmotionByIdRequest,
  VisualizeEmotionRequest,
} from './emotion.dto';

@Injectable()
export class EmotionService {
  private readonly emotionApiUrl = 'http://localhost:9000';

  async classifyEmotion(data: ClassifyEmotionRequest) {
    const response = await axios.post(
      `${this.emotionApiUrl}/classify-emotion`,
      data,
    );

    return response.data;
  }

  async visualizeEmotion(data: VisualizeEmotionRequest) {
    const response = await axios.get(
      `${this.emotionApiUrl}/visualize-emotion?topic=${data.topic}&project_id=${data.project_id}&model_type=${data.model_type}`,
    );

    return response.data;
  }

  async getEmotionByProjectId(data: EmotionByIdRequest) {
    const response = await axios.get(
      `${this.emotionApiUrl}/get-emotion-by-project-id?&project_id=${data.project_id}`,
    );

    return response.data;
  }
}
