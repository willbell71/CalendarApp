import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { calendarServiceMock } from '../../mocks/calendar.service.mock';
import { DayOfWeek, TProps } from './day-of-week';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date(2019, 8, 28)
  };

  await act(async () => {
    renderer = create(
      <DayOfWeek { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('DayOfWeek', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render the day of thw week', () => {
    expect(instance.children).toEqual(['Monday']);
  });
});
