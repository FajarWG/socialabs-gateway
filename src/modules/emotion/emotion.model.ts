import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class VisualizeEmotionResponse {
  @Field()
  emotion: [];

  @Field()
  emotion_percentage: string;

  @Field()
  emotion_percentage_by_topic: string;

  @Field()
  total_data: number;
}

@ObjectType()
export class ClassifyEmotionResponse {
  @Field()
  success: boolean;

  @Field()
  total_data: number;

  @Field()
  data: string;
}

@ObjectType()
export class EmotionByIdResponse {
  @Field()
  data: [];

  @Field()
  total_data: number;
}
