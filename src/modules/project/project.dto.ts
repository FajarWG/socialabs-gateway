import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  category: string;

  @Field()
  description: string;

  @Field()
  end_date_crawl: string;

  @Field()
  keyword: string;

  @Field()
  language: string;

  @Field()
  start_date_crawl: string;

  @Field()
  title: string;
}

@InputType()
export class ProjectStatusInput {
  @Field({ nullable: true })
  topic_modelling?: boolean;

  @Field({ nullable: true })
  sentiment?: boolean;

  @Field({ nullable: true })
  emotion?: boolean;

  @Field({ nullable: true })
  sna?: boolean;
}
