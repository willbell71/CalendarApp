import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { Search, TProps } from './search';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    search: jest.fn()
  };

  await act(async () => {
    renderer = create(
      <Search { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('Search', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });
});
