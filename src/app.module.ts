import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './models/auth/auth.module';
import { UsersModule } from './models/users/users.module';
import { PrismaService } from './prisma/prisma.service';
import environment from './common/constants/environment';
import { GraphqlModule } from './graphql/graphql.module';
import { TransfersModule } from './transfers/transfers.module';
import { ExchangesModule } from './models/exchanges/exchanges.module';
import { TransactionsModule } from './transactions/transactions.module';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { FiatTransfersModule } from './models/fiat-transfers/fiat-transfers.module';
import { TokenBalancesModule } from './models/token-balances/token-balances.module';
import { UsersExchangesModule } from './models/users-exchanges/users-exchanges.module';

@Module({
	imports: [
		UsersModule,
		GraphqlModule,
		TransfersModule,
		TransactionsModule,
		FiatTransfersModule,
		TokenBalancesModule,
		UsersExchangesModule,
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['.env', `.env.${environment}`],
		}),
		AuthModule,
		ExchangesModule,
	],
	providers: [PrismaService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('*');
	}
}
