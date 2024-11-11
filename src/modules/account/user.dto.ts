import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegisterRequest {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  confirmPassword: string;
}

@InputType()
export class LoginRequest {
  @Field()
  email: string;

  @Field()
  password: string;
}
