import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class CrawlingResponse {
  @Field()
  data: string;

  @Field()
  filename: string;
}
