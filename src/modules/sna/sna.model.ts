import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class BuzzerResponse {
  @Field(() => [])
  data_buzzer: [];
}

@ObjectType()
export class InsideBuzzerData {
  @Field()
  BEC: number;

  @Field()
  BEC_Norm: number;

  @Field()
  EVC: number;

  @Field()
  final_measure: number;

  @Field()
  node: string;

  @Field()
  projectId: string;

  @Field()
  tweet_url: string;
}

@ObjectType()
export class BuzzerByIdResponse {
  @Field(() => [InsideBuzzerData])
  data: InsideBuzzerData[];

  @Field()
  total_data: number;
}

@ObjectType()
export class CommunityByIdResponse {
  @Field(() => [InsideCommunityData])
  data: InsideCommunityData[];

  @Field()
  total_data: number;
}

@ObjectType()
export class Link {
  @Field(() => String)
  full_text: string;

  @Field(() => String)
  source: string;

  @Field(() => Number)
  source_community: number;

  @Field(() => String)
  target: string;

  @Field(() => Number)
  target_community: number;

  @Field(() => String)
  topic: string;

  @Field(() => String)
  url_tweet: string;
}

@ObjectType()
export class Node {
  @Field(() => Number)
  community: number;

  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  profile_url: string;

  @Field(() => Number)
  val: number;
}

@ObjectType()
export class InsideCommunityData {
  @Field(() => [Link])
  links: Link[];

  @Field(() => [Node])
  nodes: Node[];
}
