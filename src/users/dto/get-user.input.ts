import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsEmail } from 'class-validator';

@InputType()
export class GetUserInput {
	@IsEmail()
	@IsOptional()
	@Field({ nullable: true })
	email?: string;

	@IsNumber()
	@IsOptional()
	@Field({ nullable: true })
	id?: number;
}
