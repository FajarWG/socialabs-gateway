import { Field, ObjectType, InputType } from '@nestjs/graphql';

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
}

@ObjectType()
export class ProjectType {
  @Field()
  id: string;

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
  start_date_crawl: Date;

  @Field()
  end_date_crawl: Date;

  @Field(() => ProjectStatusType)
  project_status: ProjectStatusType;
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
