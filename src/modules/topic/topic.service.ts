import { HttpException, Injectable } from '@nestjs/common';

import { TopicDocByProjectRequest, TopicRequest } from './topic.dto';

import { AxiosService } from 'src/utils/AxiosService';

@Injectable()
export class TopicService {
  constructor(private readonly axiosService: AxiosService) {}

  async topicRoute(data: TopicRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('topic');
      const response = await axiosInstance.post(
        `/topic?keyword=${data.keyword}&start_date=${data.start_date}&end_date=${data.end_date}`,
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Topic Error',
        error.response?.status || 500,
      );
    }
  }

  async topicDocByProject(data: TopicDocByProjectRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('topic');

      const response = await axiosInstance.get(
        `/document-by-project/${data.project_id}`,
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Topic Error',
        error.response?.status || 500,
      );
    }
  }
}
