import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ClassifySentimentRequest {
  @Field()
  tweet_ids: string;
}

@InputType()
export class SentimentByIdRequest {
  @Field()
  project_id: string;
}

@InputType()
export class VisualizeSentimentRequest {
  @Field()
  topic: string;

  @Field()
  project_id: string;

  @Field()
  model_type: string;
}
