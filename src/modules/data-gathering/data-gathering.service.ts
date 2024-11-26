import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { getByKeywordRequest, CrawlingRequest } from './data-gathering.dto';
import { apiURL } from 'src/config/api.config';

@Injectable()
export class DataGatheringService {
  private readonly dataGatheringApiUrl = apiURL.dataGathering;

  async getByKeyword(data: getByKeywordRequest) {
    const response = await axios.get(
      `${this.dataGatheringApiUrl}/get-by-keyword?keyword=${data.keyword}&start_date=${data.start_date}&end_date=${data.end_date}`,
    );

    return response.data;
  }

  async crawling(data: CrawlingRequest) {
    const response = await axios.post(
      `${this.dataGatheringApiUrl}/crawling`,
      data,
    );
    return response.data;
  }

  async getQueue() {
    const response = await axios.get(`${this.dataGatheringApiUrl}/get-queue`);

    return response.data;
  }
}
