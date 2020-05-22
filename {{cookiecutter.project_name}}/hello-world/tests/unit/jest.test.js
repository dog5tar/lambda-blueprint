'use strict';

const app = require('../../app.js');
let event, context;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await app.lambdaHandler(event, context)

        expect(result).toBeInstanceOf(Object);
        expect(result.statusCode).toBe(200);
        expect(typeof result.body).toBe('string');

        let response = JSON.parse(result.body);

        expect(response).toBeInstanceOf(Object);
        expect(response.message).toBe("hello world");
    });
});
