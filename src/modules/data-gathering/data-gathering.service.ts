import { HttpException, Injectable } from '@nestjs/common';

import { getByKeywordRequest, CrawlingRequest } from './data-gathering.dto';

import { AxiosService } from 'src/utils/AxiosService';

@Injectable()
export class DataGatheringService {
  constructor(private readonly axiosService: AxiosService) {}

  async getByKeyword(data: getByKeywordRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('dataGathering');
      const response = await axiosInstance.get('/get-by-keyword', {
        params: {
          keyword: data.keyword,
          start_date: data.start_date,
          end_date: data.end_date,
        },
      });

      return response.data.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Data Gathering Error',
        error.response?.status || 500,
      );
    }
  }

  async crawling(data: CrawlingRequest) {
    try {
      const axiosInstance = this.axiosService.createInstance('dataGathering');
      const response = await axiosInstance.post('/crawling', data);

      return response.data.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Data Gathering Error',
        error.response?.status || 500,
      );
    }
  }

  async getQueue() {
    try {
      const axiosInstance = this.axiosService.createInstance('dataGathering');
      const response = await axiosInstance.get('/get-queue');

      return response.data.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Data Gathering Error',
        error.response?.status || 500,
      );
    }
  }
}
