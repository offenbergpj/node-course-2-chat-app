var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./../utils/message');

describe('generateMessage', () => {

    it('should generate the correct message object', () => {

        var from = 'Patrick';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA;
        expect(message).toMatchObject({from, text});
    });

});

describe('generateLocationMessage', () => {

    it('should generate correct location object', () => {

        var from = 'Patrick';
        var latitude = 52.372976200000004;
        var longitude = 4.9039565;
        var urlStart = 'https://www.google.com/maps?q=';
        
        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(locationMessage.createdAt).toBeA;
        expect(locationMessage).toMatchObject({ from, url: `${urlStart}${latitude},${longitude}`});

    });

});