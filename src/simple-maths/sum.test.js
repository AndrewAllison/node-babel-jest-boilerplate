import sum from './sum';

describe('sum', () => {
	const testParams = [
		{ a: 1, b: 2, result: 3 },
		{ a: 5, b: 5, result: 10 }
	];
	testParams.forEach(param => {
		test(`adds ${param.a} + ${param.b} to equal ${param.result}`, () => {
			expect(sum(param.a, param.b)).toBe(param.result);
		});
	});
});
