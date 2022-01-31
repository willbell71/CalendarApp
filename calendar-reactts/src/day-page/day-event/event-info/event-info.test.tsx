import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { EventInfo, TState } from './event-info';

let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  await act(async () => {
    renderer = create(
      <EventInfo />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('EventInfo', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should change state when opened', async() => {
    const eventInfo: ReactTestInstance = instance.findByProps({ 'data-testid': 'event-info' });
    await act(async () => eventInfo.props.onClick());

    const open: ReactTestInstance = instance.findByProps({ 'data-testid': 'event-info-open' });
    expect(open).toBeTruthy();
  });
});
