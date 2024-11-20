import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class VisualizeSentimentResponse {
  @Field()
  sentiment: [];

  @Field()
  sentiment_percentage: string;

  @Field()
  sentiment_percentage_by_topic: string;

  @Field()
  total_data: number;
}

@ObjectType()
export class ClassifySentimentResponse {
  @Field()
  success: boolean;

  @Field()
  total_data: number;

  @Field()
  data: string;
}

@ObjectType()
export class SentimentByIdResponse {
  @Field()
  data: [];

  @Field()
  total_data: number;
}
