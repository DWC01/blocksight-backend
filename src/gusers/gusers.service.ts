import { Guser } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { GetUsersInput } from './dto/get-gusers.input';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserInput } from './dto/update-guser.input';
import { CreateUserInput } from './dto/create-guser.input';

const select = {
	id: true,
	email: true,
	role: true,
	createdAt: true,
	updatedAt: true,
};

@Injectable()
export class GusersService {
	constructor(private prisma: PrismaService) {}

	findAll(args: GetUsersInput): Promise<Partial<Guser>[]> {
		const { skip, cursor, take, orderBy, where } = args;

		return this.prisma.guser.findMany({
			skip,
			take,
			cursor,
			where,
			orderBy,
			select,
		});
	}

	findOne(id: number): Promise<Partial<Guser> | null> {
		return this.prisma.guser.findUnique({
			where: {
				id,
			},
			select,
		});
	}

	async create(args: CreateUserInput): Promise<Partial<Guser>> {
		const { email, password } = args;
		const emailLowerCase = email.toLowerCase();

		return this.prisma.guser.create({
			data: {
				email: emailLowerCase,
				password,
			},
			select,
		});
	}

	update(
		id: number,
		data: UpdateUserInput
	): Promise<Partial<Guser>> {
		return this.prisma.guser.update({
			where: {
				id,
			},
			data,
			select,
		});
	}

	delete(id: number): Promise<Partial<Guser>> {
		return this.prisma.guser.delete({
			where: {
				id,
			},
			select,
		});
	}
}
