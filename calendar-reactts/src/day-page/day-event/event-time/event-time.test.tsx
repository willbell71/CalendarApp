import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { EventTime, TProps, TState } from './event-time';

import { calendarServiceMock } from '../../../mocks/calendar.service.mock';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date(),
    today: new Date('2019-10-01T02:10:00.000')
  };

  await act(async () => {
    renderer = create(
      <EventTime { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('EventTime', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should change state when opened', async () => {
    const eventTime: ReactTestInstance = instance.findByProps({ 'data-testid': 'event-time' });

    await act(async () => eventTime.props.onClick());

    const open: ReactTestInstance = instance.findByProps({ 'data-testid': 'event-time-open' });
    expect(open).toBeTruthy();
  });
});
