import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  AuthResponse,
  LoginResponse,
  RegisterResponse,
  User,
} from './user.model';
import { RegisterRequest } from './user.dto';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => LoginResponse)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<LoginResponse> {
    const loginData = { email, password };
    const tokens = await this.userService.login(loginData);

    return {
      message: 'Login successful',
      accessToken: tokens.data.accessToken,
      refreshToken: tokens.data.refreshToken,
    };
  }

  @Mutation(() => RegisterResponse)
  async register(
    @Args('email') email: string,
    @Args('name') name: string,
    @Args('password') password: string,
    @Args('confirmPassword') confirmPassword: string,
  ): Promise<RegisterResponse> {
    const registerData: RegisterRequest = {
      email,
      name,
      password,
      confirmPassword,
    };
    await this.userService.register(registerData);
    return { message: 'User created successfully' };
  }

  @Mutation(() => AuthResponse)
  async generateToken(@Args('refreshToken') refreshToken: string) {
    const data = await this.userService.generateToken(refreshToken);
    console.log(data);
    return {
      message: 'Token generated successfully',
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    };
  }

  @Mutation(() => String)
  async logout(@Context() context: any): Promise<string> {
    const user = context.req.user;
    await this.userService.logout(user.sub);
    return 'User logged out successfully';
  }

  @Mutation(() => User)
  async currentUser(@Context() context: any): Promise<User> {
    const token = context.req.headers.authorization.split(' ')[1];
    const user = await this.userService.currentUser(token);
    const { data } = user;
    return {
      _id: data._id,
      email: data.email,
      name: data.name,
    };
  }
}
