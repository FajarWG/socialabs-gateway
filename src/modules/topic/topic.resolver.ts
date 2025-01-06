import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { TopicService } from './topic.service';
import {
  TopicByProjectResponse,
  TopicDocByProjectResponse,
  TopicResponse,
} from './topic.model';
import { TopicDocByProjectRequest } from './topic.dto';

@Resolver()
export class TopicResolver {
  constructor(private readonly topicService: TopicService) {}

  @Mutation(() => TopicResponse)
  async topicRoute(
    @Args('keyword') keyword: string,
    @Args('start_date') start_date: string,
    @Args('end_date') end_date: string,
  ): Promise<TopicResponse> {
    const data = {
      keyword,
      start_date,
      end_date,
    };
    const results = await this.topicService.topicRoute(data);
    return {
      topic: results.topic,
      context: results.context,
      interpretation: results.interpretation,
      document_topic: results.document_topic,
    };
  }

  @Query(() => TopicByProjectResponse)
  async topicByProject(
    @Args('project_id') project_id: string,
  ): Promise<TopicByProjectResponse> {
    const data_request: TopicDocByProjectRequest = {
      project_id,
    };
    const results = await this.topicService.topicByProject(data_request);

    console.log(results.data[0].words);

    return {
      context: results.data[0].context,
      keyword: results.data[0].keyword,
      projectId: results.data[0].projectId,
      topicId: results.data[0].topicId,
      words: results.data[0].words,
    };
  }

  @Query(() => TopicDocByProjectResponse)
  async topicDocByProject(
    @Args('project_id') project_id: string,
  ): Promise<TopicDocByProjectResponse> {
    const data_request: TopicDocByProjectRequest = {
      project_id,
    };
    const results = await this.topicService.topicDocByProject(data_request);

    return {
      data: results.data,
    };
  }
}
