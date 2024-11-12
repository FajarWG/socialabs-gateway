import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CrawlingRequest {
  @Field()
  access_token: string;

  @Field()
  keywords: string;

  @Field()
  projectId: string;

  @Field()
  total_tweet: number;
}

@InputType()
export class getByKeywordRequest {
  @Field()
  keyword: string;

  @Field()
  start_date: string;

  @Field()
  end_date: string;
}
