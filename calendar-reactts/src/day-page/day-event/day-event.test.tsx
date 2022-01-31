import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { DayEvent, TProps } from './day-event';

import { calendarServiceMock } from '../../mocks/calendar.service.mock';

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
      <DayEvent { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('DayEvent', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });
});
