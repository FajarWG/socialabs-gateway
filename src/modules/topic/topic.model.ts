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
