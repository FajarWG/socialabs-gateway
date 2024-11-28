import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { EmotionService } from './emotion.service';
import {
  ClassifyEmotionResponse,
  // EmotionByIdResponse,
  VisualizeEmotionResponse,
} from './emotion.model';
import { VisualizeEmotionRequest } from './emotion.dto';

@Resolver()
export class EmotionResolver {
  constructor(private readonly emotionService: EmotionService) {}

  @Mutation(() => ClassifyEmotionResponse)
  async classifyEmotion(
    @Args('tweet_ids') tweet_ids: string,
  ): Promise<ClassifyEmotionResponse> {
    const data = {
      tweet_ids,
    };
    const results = await this.emotionService.classifyEmotion(data);
    return {
      success: results.success,
      total_data: results.total_data,
      data: results.data,
    };
  }

  @Query(() => VisualizeEmotionResponse)
  async visualizeEmotion(
    @Args('topic') topic: string,
    @Args('project_id') project_id: string,
    @Args('model_type') model_type: string,
  ): Promise<VisualizeEmotionResponse> {
    const data_request: VisualizeEmotionRequest = {
      topic,
      model_type,
      project_id,
    };
    const results = await this.emotionService.visualizeEmotion(data_request);

    return {
      emotion: results.emotion,
      emotion_percentage: results.emotion_percentage,
      emotion_percentage_by_topic: results.emotion_percentage_by_topic,
      total_data: results.total_data,
    };
  }

  // @Query(() => EmotionByIdResponse)
  // async getEmotionByProject(
  //   @Args('project_id') project_id: string,
  // ): Promise<EmotionByIdResponse> {
  //   const data_request: EmotionByIdRequest = {
  //     project_id,
  //   };
  //   const results =
  //     await this.emotionService.getEmotionByProjectId(data_request);
  //   return {
  //     data: results.data,
  //     total_data: results.total_data,
  //   };
  // }
}
