import type { Module } from './module.js';

export class Test {
  public test(module: Module) {
    return 'testing ' + module.fullName();
  }
}
