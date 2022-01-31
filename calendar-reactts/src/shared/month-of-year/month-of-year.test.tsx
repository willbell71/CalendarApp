import * as React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { calendarServiceMock } from '../../mocks/calendar.service.mock';
import { MonthOfYear, TProps } from './month-of-year';

calendarServiceMock.getMonthName = jest.fn().mockImplementation((monthIndex: number): string => 'September');
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
      <MonthOfYear {...props} />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('MonthOfYear', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render the month', () => {
    expect(instance.children).toEqual(['September']);
  });
});
