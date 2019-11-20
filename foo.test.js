const assert = require('assert');

const foo = require('./foo');

describe('foo', () => {
  it('adds numbers', () => {
    assert.equal(2000, foo());
  });
});
