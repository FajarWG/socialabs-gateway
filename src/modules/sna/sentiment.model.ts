import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BuzzerResponse {
  @Field()
  data_buzzer: [];
}

@ObjectType()
export class GraphResponse {
  @Field()
  nodes: [];

  @Field()
  links: [];
}

@ObjectType()
export class CommunityResponse {
  @Field()
  nodes: [];

  @Field()
  links: [];
}

@ObjectType()
export class BuzzerByIdResponse {
  @Field()
  data: [];

  @Field()
  total_data: number;
}

@ObjectType()
export class CommunityByIdResponse {
  @Field()
  data: [];

  @Field()
  total_data: number;
}
