import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BuzzerRequest {
  @Field()
  keyword: string;

  @Field()
  num_topics: number;

  @Field()
  num_tweets: number;

  @Field()
  topic: string;
}

@InputType()
export class GraphRequest {
  @Field()
  keyword: string;

  @Field()
  num_topics: number;

  @Field()
  num_tweets: number;

  @Field()
  topic: string;
}

@InputType()
export class CommunityRequest {
  @Field()
  keyword: string;

  @Field()
  num_topics: number;

  @Field()
  num_tweets: number;

  @Field()
  topic: string;
}

@InputType()
export class BuzzerByIdRequest {
  @Field()
  project_id: string;
}

@InputType()
export class CommunityByIdRequest {
  @Field()
  project_id: string;
}
