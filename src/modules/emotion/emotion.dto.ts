import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ClassifyEmotionRequest {
  @Field()
  tweet_ids: string;
}

@InputType()
export class EmotionByIdRequest {
  @Field()
  project_id: string;
}

@InputType()
export class VisualizeEmotionRequest {
  @Field()
  topic: string;

  @Field()
  project_id: string;

  @Field()
  model_type: string;
}
