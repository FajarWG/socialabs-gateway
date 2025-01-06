import { Resolver, Args, Query } from '@nestjs/graphql';
import { SNAService } from './sna.service';
import {
  BuzzerByIdResponse,
  // BuzzerResponse,
  CommunityByIdResponse,
  InsideCommunityData,
} from './sna.model';
import {
  BuzzerByIdRequest,
  // BuzzerRequest,
  CommunityByIdRequest,
  CommunityRequest,
  GraphRequest,
} from './sna.dto';

@Resolver()
export class SNAResolver {
  constructor(private readonly snaService: SNAService) {}

  // @Query(() => BuzzerResponse)
  // async getBuzzer(
  //   @Args('keyword') keyword: string,
  //   @Args('num_topics') num_topics: number,
  //   @Args('num_tweets') num_tweets: number,
  //   @Args('topic') topic: string,
  // ): Promise<BuzzerResponse> {
  //   const data_request: BuzzerRequest = {
  //     keyword,
  //     num_topics,
  //     num_tweets,
  //     topic,
  //   };
  //   const results = await this.snaService.getBuzzer(data_request);
  //   return {
  //     data_buzzer: results.data_buzzer,
  //   };
  // }

  @Query(() => InsideCommunityData)
  async getGraph(
    @Args('keyword') keyword: string,
    @Args('num_topics') num_topics: number,
    @Args('num_tweets') num_tweets: number,
    @Args('topic') topic: string,
  ): Promise<InsideCommunityData> {
    const data_request: GraphRequest = {
      keyword,
      num_topics,
      num_tweets,
      topic,
    };
    const results = await this.snaService.getGraph(data_request);
    return {
      nodes: results.nodes,
      links: results.links,
    };
  }

  @Query(() => InsideCommunityData)
  async getCommunity(
    @Args('keyword') keyword: string,
    @Args('num_topics') num_topics: number,
    @Args('num_tweets') num_tweets: number,
    @Args('topic') topic: string,
  ): Promise<InsideCommunityData> {
    const data_request: CommunityRequest = {
      keyword,
      num_topics,
      num_tweets,
      topic,
    };
    const results = await this.snaService.getCommunity(data_request);
    return {
      nodes: results.nodes,
      links: results.links,
    };
  }

  @Query(() => BuzzerByIdResponse)
  async getBuzzerByProject(
    @Args('project_id') project_id: string,
  ): Promise<BuzzerByIdResponse> {
    const data_request: BuzzerByIdRequest = {
      project_id,
    };
    const results = await this.snaService.getBuzzerByProjectId(data_request);

    return {
      data: results.data,
      total_data: results.total_data,
    };
  }

  @Query(() => CommunityByIdResponse)
  async getCommunityByProject(
    @Args('project_id') project_id: string,
  ): Promise<CommunityByIdResponse> {
    const data_request: CommunityByIdRequest = {
      project_id,
    };
    const results = await this.snaService.getCommunityByProjectId(data_request);
    return {
      data: results.data,
      total_data: results.total_data,
    };
  }
}
