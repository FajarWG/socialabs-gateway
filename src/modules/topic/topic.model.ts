import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TopicResponse {
  @Field()
  topic: string;

  @Field()
  context: string;

  @Field()
  interpretation: string;

  @Field()
  document_topic: string;
}

@ObjectType()
export class TopicDocument {
  @Field()
  full_text: string;

  @Field()
  topic: string;

  @Field()
  tweet_url: string;

  @Field()
  username: string;
}

@ObjectType()
export class TopicDocByProjectResponse {
  @Field(() => [TopicDocument])
  data: TopicDocument[];
}

@ObjectType()
export class TopicByProjectResponse {
  @Field()
  context: string;

  @Field()
  keyword: string;

  @Field()
  projectId: string;

  @Field()
  topicId: number;

  @Field(() => [String])
  words: string[];
}
