// @ts-expect-error wrong react version
import React, { cache } from 'react';

const requestId = cache(() => Math.random());
type Exports = Record<string, any>;

export const Mock = {
  cache: {} as Record<string, any>,
  storybookRequests: {} as Record<string, boolean>,
  set(data: any) {
    const id = requestId();
    console.log('Mock.set', { id, data });
    this.cache[id] = data;
    this.storybookRequests[id] = true;
  },
  get() {
    const id = requestId();
    const data = this.cache[id];
    console.log('Mock.get', { id, data });
    return data;
  },
  fn(original: any, mock: any) {
    return async (...args: any) => {
      // Important -- we need to do this because otherwise the page renders *before* the layout
      await new Promise((r) => setTimeout(r, 0));

      const id = requestId();
      const isStorybook = !!this.storybookRequests[id];
      console.log(`Checking ${id}, using SB: ${isStorybook}`);
      return isStorybook ? mock(...args) : original(...args);
    };
  },
  module(original: Exports, mocks: Exports) {
    const result = { ...original };
    Object.keys(mocks).forEach((key) => {
      result[key] = Mock.fn(original[key], mocks[key]);
    });
    return result;
  },
};
