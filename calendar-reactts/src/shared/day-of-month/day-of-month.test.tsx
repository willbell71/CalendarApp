import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { DayOfMonth, TProps } from './day-of-month';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    date: new Date(2019, 8, 28)
  };

  await act(async () => {
    renderer = create(
      <DayOfMonth { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('DayOfMonth', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render the day', () => {
    expect(instance.children).toEqual(['28']);
  });
});
