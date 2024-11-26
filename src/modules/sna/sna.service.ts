import { Injectable } from '@nestjs/common';
import axios from 'axios';
import {
  BuzzerByIdRequest,
  BuzzerRequest,
  CommunityByIdRequest,
  CommunityRequest,
  GraphRequest,
} from './sna.dto';
import { apiURL } from 'src/config/api.config';

@Injectable()
export class SNAService {
  private readonly snaApiUrl = apiURL.sna;

  async getBuzzer(data: BuzzerRequest) {
    const response = await axios.get(
      `${this.snaApiUrl}/get-buzzer?keyword=${data.keyword}&num_topics=${data.num_topics}&num_tweets=${data.num_tweets}&topic_filter=${data.topic}`,
    );

    return response.data;
  }

  async getGraph(data: GraphRequest) {
    const response = await axios.get(
      `${this.snaApiUrl}/graph?keyword=${data.keyword}&num_topics=${data.num_topics}&num_tweets=${data.num_tweets}&topic_filter=${data.topic}`,
    );

    return response.data;
  }

  async getCommunity(data: CommunityRequest) {
    const response = await axios.get(
      `${this.snaApiUrl}/community?keyword=${data.keyword}&num_topics=${data.num_topics}&num_tweets=${data.num_tweets}&topic_filter=${data.topic}`,
    );

    return response.data;
  }
  async getBuzzerByProjectId(data: BuzzerByIdRequest) {
    const response = await axios.get(
      `${this.snaApiUrl}/get-buzzer-by-project-id?&project_id=${data.project_id}`,
    );

    return response.data;
  }

  async getCommunityByProjectId(data: CommunityByIdRequest) {
    const response = await axios.get(
      `${this.snaApiUrl}/get-community-by-project-id?&project_id=${data.project_id}`,
    );

    return response.data;
  }
}
