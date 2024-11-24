import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class ProjectStatusType {
  @Field()
  topic_modelling: boolean;

  @Field()
  sentiment: boolean;

  @Field()
  emotion: boolean;

  @Field()
  sna: boolean;

  @Field()
  _id: string;
}

@ObjectType()
export class ProjectResults {
  @Field(() => [ProjectType])
  projects: ProjectType[];

  @Field()
  total: number;

  @Field()
  page: number;

  @Field()
  limit: number;
}

@ObjectType()
export class ProjectType {
  @Field()
  _id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  keyword: string;

  @Field()
  userId: string;

  @Field()
  topic_category: string;

  @Field()
  language: string;

  @Field()
  start_date_crawl: string;

  @Field()
  end_date_crawl: string;

  @Field()
  createdAt: string;

  @Field(() => ProjectStatusType)
  project_status: ProjectStatusType;
}
