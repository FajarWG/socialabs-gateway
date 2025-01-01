import { HttpException, Injectable } from '@nestjs/common';

import {
  ClassifySentimentRequest,
  SentimentByIdRequest,
  VisualizeSentimentRequest,
} from './sentiment.dto';

import { AxiosService } from 'src/utils/AxiosService';

@Injectable()
export class SentimentService {
  constructor(private readonly axiosService: AxiosService) {}

  async classifySentiment(data: ClassifySentimentRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('sentiment');
      const response = await axiosInstance.post('/classify-sentiment', data);

      return response.data.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Sentiment Error',
        error.response?.status || 500,
      );
    }
  }

  async visualizeSentiment(data: VisualizeSentimentRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('sentiment');

      const response = await axiosInstance.get(
        `/visualize-sentiment?project_id=${data.project_id}&topic=${data.topic}&model_type=${data.model_type}`,
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Sentiment Error',
        error.response?.status || 500,
      );
    }
  }

  async getSentimentByProjectId(data: SentimentByIdRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('sentiment');
      const response = await axiosInstance.get('/get-sentiment-by-project-id', {
        params: {
          project_id: data.project_id,
        },
      });

      return response.data.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Sentiment Error',
        error.response?.status || 500,
      );
    }
  }
}
