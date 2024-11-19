import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class QueryRequest {
  @Field()
  project_id: string;

  @Field()
  query: string;
}

@InputType()
export class PromptRequest {
  @Field()
  project_id: string;
}
