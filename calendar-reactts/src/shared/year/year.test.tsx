import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { Year, TProps } from './year';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    date: new Date(2019, 8, 28)
  };

  await act(async () => {
    renderer = create(
      <Year {...props} />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('Year', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render the year', async () => {
    expect(instance.children).toEqual([`${props.date.getFullYear()}`]);
  });
});
