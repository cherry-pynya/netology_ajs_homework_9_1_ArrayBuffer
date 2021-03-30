import ArrayBufferConverter from '../ArrayBufferConverter.js';
import getBuffer from '../getBuffer.js';

test('one and only',() => {
    let converter = new ArrayBufferConverter();
    converter.load(getBuffer());
    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})