import expectedExchangeObject from '../../exchanges/expected-objects/expected-exchange-object';

const expectedObject = expect.objectContaining({
	id: expect.any(Number),
	type: expect.any(String),
	amount: expect.any(String),
	currency: expect.any(String),
	timestamp: expect.any(String),
	transferData: expect.any(String),
	exchangeId: expect.any(Number),
	userId: expect.any(Number),
	createdAt: expect.any(String),
	updatedAt: expect.any(String),
	exchange: expectedExchangeObject,
});

export default expectedObject;
