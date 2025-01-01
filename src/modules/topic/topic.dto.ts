import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TopicRequest {
  @Field()
  keyword: string;

  @Field()
  start_date: string;

  @Field()
  end_date: string;
}

@InputType()
export class SentimentByIdRequest {
  @Field()
  project_id: string;
}

@InputType()
export class TopicDocByProjectRequest {
  @Field()
  project_id: string;
}
