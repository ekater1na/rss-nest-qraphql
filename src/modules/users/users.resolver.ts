import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { RegisterUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('registerUser')
  create(@Args('registerUserInput') registerUserInput: RegisterUserInput) {
    return this.usersService.create(registerUserInput);
  }

  @Query()
  async jwt(@Args('email') email: string, @Args('password') password: string) {
    return this.usersService.getJwt(email, password);
  }

  @Query()
  async user(@Args('id') id: string) {
    return this.usersService.findUser(id);
  }

  @Mutation('updateUser')
  update(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @Context() context: any,
  ) {
    return this.usersService.update(
      updateUserInput.id,
      updateUserInput,
      context,
    );
  }

  @Mutation('removeUser')
  remove(@Args('id') id: string, @Context() context: any) {
    return this.usersService.remove(id, context);
  }
}
