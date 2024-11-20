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
  async classifySentiment(data: ClassifySentimentRequest) {
    const response = await axios.post(
      `${apiURL.sentiment}/classify-sentiment`,
      data,
    );

    return response.data;
  }

  async visualizeSentiment(data: VisualizeSentimentRequest) {
    const response = await axios.get(
      `${apiURL.sentiment}/visualize-sentiment?topic=${data.topic}&project_id=${data.project_id}&model_type=${data.model_type}`,
    );

    return response.data;
  }

  async getSentimentByProjectId(data: SentimentByIdRequest) {
    const response = await axios.get(
      `${apiURL.sentiment}/get-sentiment-by-project-id?&project_id=${data.project_id}`,
    );

    return response.data;
  }
}
