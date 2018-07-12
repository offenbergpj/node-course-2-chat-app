const expect = require('expect');

var { isRealString } = require('./../utils/validation.js');

describe('isRealString', () => {

    it('should reject non-string values', () => {
        var input = 123;
        expect(isRealString(input)).toBe(false);

    });

    it('should reject string with only spaces', () => {
        var input = '   ';
        expect(isRealString(input)).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var input = 'real ';
        expect(isRealString(input)).toBe(true);
    });

});