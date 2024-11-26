import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  ClassifySentimentRequest,
  SentimentByIdRequest,
  VisualizeSentimentRequest,
} from './sentiment.dto';
import { apiURL } from 'src/config/api.config';

@Injectable()
export class SentimentService {
  private readonly sentimentApiUrl = apiURL.sentiment;
  async classifySentiment(data: ClassifySentimentRequest) {
    const response = await axios.post(
      `${this.sentimentApiUrl}/classify-sentiment`,
      data,
    );

    return response.data;
  }

  async visualizeSentiment(data: VisualizeSentimentRequest) {
    const response = await axios.get(
      `${this.sentimentApiUrl}/visualize-sentiment?topic=${data.topic}&project_id=${data.project_id}&model_type=${data.model_type}`,
    );

    return response.data;
  }

  async getSentimentByProjectId(data: SentimentByIdRequest) {
    const response = await axios.get(
      `${this.sentimentApiUrl}/get-sentiment-by-project-id?&project_id=${data.project_id}`,
    );

    return response.data;
  }
}
