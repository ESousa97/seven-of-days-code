import test from 'node:test';
import assert from 'node:assert/strict';
import nextConfig from '../next.config.mjs';

test('next config exports an object', () => {
  assert.equal(typeof nextConfig, 'object');
});
