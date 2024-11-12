import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AuthResponse {
  @Field()
  message: string;

  @Field()
  accessToken: string;

  @Field()
  refreshToken?: string;
}

@ObjectType()
export class RegisterResponse {
  @Field()
  message: string;
}

@ObjectType()
export class LoginResponse {
  @Field()
  message: string;

  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}

@ObjectType()
export class User {
  @Field()
  _id: string;

  @Field()
  email: string;

  @Field()
  name: string;
}
