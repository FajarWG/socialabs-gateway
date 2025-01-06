import { HttpException, Injectable } from '@nestjs/common';

import {
  BuzzerByIdRequest,
  // BuzzerRequest,
  CommunityByIdRequest,
  CommunityRequest,
  GraphRequest,
} from './sna.dto';

import { AxiosService } from 'src/utils/AxiosService';

@Injectable()
export class SNAService {
  constructor(private readonly axiosService: AxiosService) {}

  // async getBuzzer(data: BuzzerRequest) {
  //   const response = await axios.get(
  //     `${this.configService.get<string>('apiService.sna')}/get-buzzer?keyword=${data.keyword}&num_topics=${data.num_topics}&num_tweets=${data.num_tweets}&topic_filter=${data.topic}`,
  //   );

  //   return response.data;
  // }

  async getGraph(data: GraphRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('sna');
      const response = await axiosInstance.get('/graph', {
        params: {
          keyword: data.keyword,
          num_topics: data.num_topics,
          num_tweets: data.num_tweets,
          topic_filter: data.topic,
        },
      });

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service SNA Error',
        error.response?.status || 500,
      );
    }
  }

  async getCommunity(data: CommunityRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('sna');
      const response = await axiosInstance.get('/community', {
        params: {
          keyword: data.keyword,
          num_topics: data.num_topics,
          num_tweets: data.num_tweets,
          topic_filter: data.topic,
        },
      });

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service SNA Error',
        error.response?.status || 500,
      );
    }
  }

  async getBuzzerByProjectId(data: BuzzerByIdRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('sna');
      const response = await axiosInstance.get(
        `/get-buzzer-by-project-id/${data.project_id}`,
      );
      console.log(response);

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service SNA Error',
        error.response?.status || 500,
      );
    }
  }

  async getCommunityByProjectId(data: CommunityByIdRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('sna');
      const response = await axiosInstance.get(
        `/get-community-by-project-id/${data.project_id}`,
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service SNA Error',
        error.response?.status || 500,
      );
    }
  }
}
