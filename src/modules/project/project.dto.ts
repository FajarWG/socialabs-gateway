import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ProjectDto {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  keyword: string;

  @Field()
  topicCategory: string;

  @Field()
  language: string;

  @Field()
  startDateCrawl: Date;

  @Field()
  endDateCrawl: Date;
}
