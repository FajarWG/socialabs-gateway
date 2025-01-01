import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { TopicService } from './topic.service';
import { TopicDocByProjectResponse, TopicResponse } from './topic.model';
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
