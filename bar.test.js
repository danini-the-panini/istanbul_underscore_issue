const assert = require('assert');

const bar = require('./bar');

describe('bar', () => {
  it('adds numbers', () => {
    assert.equal(2000, bar());
  });
});
