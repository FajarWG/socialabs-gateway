import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  ClassifySentimentRequest,
  SentimentByIdRequest,
  VisualizeSentimentRequest,
} from './sentiment.dto';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class SentimentService {
  constructor(private configService: ConfigService) {}

  async classifySentiment(data: ClassifySentimentRequest) {
    const response = await axios.post(
      `${this.configService.get<string>('apiService.sentiment')}/classify-sentiment`,
      data,
    );

    return response.data;
  }

  async visualizeSentiment(data: VisualizeSentimentRequest) {
    const response = await axios.get(
      `${this.configService.get<string>('apiService.sentiment')}/visualize-sentiment?topic=${data.topic}&project_id=${data.project_id}&model_type=${data.model_type}`,
    );

    return response.data;
  }

  async getSentimentByProjectId(data: SentimentByIdRequest) {
    const response = await axios.get(
      `${this.configService.get<string>('apiService.sentiment')}/get-sentiment-by-project-id?&project_id=${data.project_id}`,
    );

    return response.data;
  }
}
