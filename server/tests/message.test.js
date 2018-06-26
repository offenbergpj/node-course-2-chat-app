var expect = require('expect');

var { generateMessage } = require('./../utils/message');

describe('generateMessage', () => {

    it('should generate the correct message object', () => {

        var from = 'Patrick';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA;
        expect(message).toMatchObject({from, text});
    });

});