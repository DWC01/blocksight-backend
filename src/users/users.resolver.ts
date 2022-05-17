import { User } from './models/user.model';
import { UsersService } from './users.service';
import { GetUserInput } from './dto/get-user.input';
import { GetUsersInput } from './dto/get-users.input';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Resolver, Context, Query, Mutation, Args, Int } from '@nestjs/graphql';
import generateGraphQLError from '../graphql/errors/generate-graphql-error';

@Resolver(() => User)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => User)
	user(@Args('getUserInput') getUserInput: GetUserInput) {
		return this.usersService.findOne(getUserInput);
	}

	@Query(() => [User])
	users(@Args('getUsersInput') getUsersInput: GetUsersInput) {
		return this.usersService.findAll(getUsersInput);
	}

	@Mutation(() => User)
	async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
		try {
			return await this.usersService.create(createUserInput);
		} catch (error) {
			generateGraphQLError(error);
		}
	}

	@Mutation(() => User)
	async updateUser(
		@Args('id', { type: () => Int }) id: number,
		@Args('updateUserInput') updateUserInput: UpdateUserInput
	) {
		try {
			return await this.usersService.update(id, updateUserInput);
		} catch (error) {
			generateGraphQLError(error);
		}
	}

	@Mutation(() => User)
	removeUser(@Args('id', { type: () => Int }) id: number) {
		return this.usersService.delete(id);
	}
}
