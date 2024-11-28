import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { getByKeywordRequest, CrawlingRequest } from './data-gathering.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DataGatheringService {
  constructor(private configService: ConfigService) {}

  async getByKeyword(data: getByKeywordRequest) {
    const response = await axios.get(
      `${this.configService.get<string>('apiService.dataGathering')}/get-by-keyword?keyword=${data.keyword}&start_date=${data.start_date}&end_date=${data.end_date}`,
    );

    return response.data;
  }

  async crawling(data: CrawlingRequest) {
    const response = await axios.post(
      `${this.configService.get<string>('apiService.dataGathering')}/crawling`,
      data,
    );
    return response.data;
  }

  async getQueue() {
    const response = await axios.get(
      `${this.configService.get<string>('apiService.dataGathering')}/get-queue`,
    );

    return response.data;
  }
}
