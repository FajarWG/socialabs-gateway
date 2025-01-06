import { HttpException, Injectable } from '@nestjs/common';

import {
  ClassifyEmotionRequest,
  // EmotionByIdRequest,
  VisualizeEmotionRequest,
} from './emotion.dto';

import { AxiosService } from 'src/utils/AxiosService';

@Injectable()
export class EmotionService {
  constructor(private readonly axiosService: AxiosService) {}

  async classifyEmotion(data: ClassifyEmotionRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('emotion');
      const response = await axiosInstance.post('/classify-emotion', data);

      return response.data.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Emotion Error',
        error.response?.status || 500,
      );
    }
  }

  async visualizeEmotion(data: VisualizeEmotionRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('emotion');
      const response = await axiosInstance.get(
        `/visualize-emotion?project_id=${data.project_id}&topic=${data.topic}&model_type=${data.model_type}`,
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Emotion Error',
        error.response?.status || 500,
      );
    }
  }

  // async getEmotionByProjectId(data: EmotionByIdRequest) {
  //   const response = await axios.get(
  //     `${this.configService.get<string>('apiService.emotion')}/get-emotion-by-project-id?&project_id=${data.project_id}`,
  //   );

  //   return response.data;
  // }
}
