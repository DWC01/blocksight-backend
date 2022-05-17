import { join } from 'path';
import GraphQLJSON from 'graphql-type-json';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLDateTime } from 'graphql-iso-date';
import ErrorMessage from './errors/error-message.enum';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

const environment = process.env.NODE_ENV || 'development';
const isDevelopment = environment === 'development';

const plugins = isDevelopment
	? [ApolloServerPluginLandingPageLocalDefault()]
	: [];

const GraphqlModule = GraphQLModule.forRoot<ApolloDriverConfig>({
	plugins,
	debug: false,
	sortSchema: true,
	playground: false,
	driver: ApolloDriver,
	autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
	// resolvers: { DateTime: GraphQLDateTime, JSON: GraphQLJSON },
	formatError: (error: GraphQLError) => {
		const graphQLFormattedError: GraphQLFormattedError = {
			message: !error.message.includes('prisma')
				? error.message
				: ErrorMessage.DATABASE_ERROR,
			extensions: error.extensions,
		};

		return graphQLFormattedError;
	},
});

export { GraphqlModule };
