import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { SentimentService } from './sentiment.service';
import {
  ClassifySentimentResponse,
  // SentimentByIdResponse,
  VisualizeSentimentResponse,
} from './sentiment.model';
import {
  // SentimentByIdRequest,
  VisualizeSentimentRequest,
} from './sentiment.dto';

@Resolver()
export class SentimentResolver {
  constructor(private readonly sentimentService: SentimentService) {}

  @Mutation(() => ClassifySentimentResponse)
  async classifySentiment(
    @Args('tweet_ids') tweet_ids: string,
  ): Promise<ClassifySentimentResponse> {
    const data = {
      tweet_ids,
    };
    const results = await this.sentimentService.classifySentiment(data);
    return {
      success: results.success,
      total_data: results.total_data,
      data: results.data,
    };
  }

  @Query(() => VisualizeSentimentResponse)
  async visualizeSentiment(
    @Args('topic') topic: string,
    @Args('project_id') project_id: string,
    @Args('model_type') model_type: string,
  ): Promise<VisualizeSentimentResponse> {
    const data_request: VisualizeSentimentRequest = {
      topic,
      model_type,
      project_id,
    };
    const results =
      await this.sentimentService.visualizeSentiment(data_request);

    return {
      sentiment: results.sentiment,
      sentiment_percentage: results.sentiment_percentage,
      sentiment_percentage_by_topic: results.sentiment_percentage_by_topic,
      total_data: results.total_data,
    };
  }

  // @Query(() => SentimentByIdResponse)
  // async getSentimentByProject(
  //   @Args('project_id') project_id: string,
  // ): Promise<SentimentByIdResponse> {
  //   const data_request: SentimentByIdRequest = {
  //     project_id,
  //   };
  //   const results =
  //     await this.sentimentService.getSentimentByProjectId(data_request);
  //   return {
  //     data: results.data,
  //     total_data: results.total_data,
  //   };
  // }
}
