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
  async generateToken(@Context() context: any): Promise<AuthResponse> {
    const user = context.req.user;
    const tokens = await this.userService.generateToken(user);
    return {
      message: 'Token generated successfully',
      accessToken: tokens.accessToken,
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
    return context.req.user;
  }
}
