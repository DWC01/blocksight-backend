import { Test, TestingModule } from '@nestjs/testing';
import { ExchangesResolver } from './exchanges.resolver';

describe('ExchangesResolver', () => {
	let resolver: ExchangesResolver;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ExchangesResolver],
		}).compile();

		resolver = module.get<ExchangesResolver>(ExchangesResolver);
	});

	it('should be defined', () => {
		expect(resolver).toBeDefined();
	});
});
