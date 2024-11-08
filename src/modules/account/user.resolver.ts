import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'user' })
  async getUser(@Args('id') id: string): Promise<User> {
    return this.userService.getUserByEmail(id);
  }
}
