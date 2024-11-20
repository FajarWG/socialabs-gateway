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
  async getBuzzer(data: BuzzerRequest) {
    const response = await axios.get(
      `${apiURL.sna}/get-buzzer?keyword=${data.keyword}&num_topics=${data.num_topics}&num_tweets=${data.num_tweets}&topic_filter=${data.topic}`,
    );

    return response.data;
  }

  async getGraph(data: GraphRequest) {
    const response = await axios.get(
      `${apiURL.sna}/graph?keyword=${data.keyword}&num_topics=${data.num_topics}&num_tweets=${data.num_tweets}&topic_filter=${data.topic}`,
    );

    return response.data;
  }

  async getCommunity(data: CommunityRequest) {
    const response = await axios.get(
      `${apiURL.sna}/community?keyword=${data.keyword}&num_topics=${data.num_topics}&num_tweets=${data.num_tweets}&topic_filter=${data.topic}`,
    );

    return response.data;
  }
  async getBuzzerByProjectId(data: BuzzerByIdRequest) {
    const response = await axios.get(
      `${apiURL.sna}/get-buzzer-by-project-id?&project_id=${data.project_id}`,
    );

    return response.data;
  }

  async getCommunityByProjectId(data: CommunityByIdRequest) {
    const response = await axios.get(
      `${apiURL.sna}/get-community-by-project-id?&project_id=${data.project_id}`,
    );

    return response.data;
  }
}
