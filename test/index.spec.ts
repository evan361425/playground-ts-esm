import { Test } from '../src/index.js';
import { Module } from '../src/module.js';
import { NAME } from './helper.js';

describe('test', () => {
  it('test', () => {
    const module = new Module(NAME);
    const test = new Test();

    expect(test.test(module)).toBe('testing Module ' + NAME);
  });
});
