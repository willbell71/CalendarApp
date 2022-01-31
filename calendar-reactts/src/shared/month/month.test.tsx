import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { calendarServiceMock } from '../../mocks/calendar.service.mock';
import { Month, TProps } from './month';

calendarServiceMock.getStartOfMonthGridDate = jest.fn().mockImplementation((start: Date): Date => new Date(2019, 8, 26));
let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date(2019, 8, 1),
    today: new Date(2019, 8, 26)
  };

  await act(async () => {
    renderer = create(
      <Month { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('Month', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render days from Monday', () => {
    const days: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'month-day' });

    expect(days[0].props.children).toEqual('M');
    expect(days[1].props.children).toEqual('T');
    expect(days[2].props.children).toEqual('W');
    expect(days[3].props.children).toEqual('T');
    expect(days[4].props.children).toEqual('F');
    expect(days[5].props.children).toEqual('S');
    expect(days[6].props.children).toEqual('S');
  });

  it('should start on 26', () => {
    const dates: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'month-date' });

    expect(dates[0].props.children).toEqual(26);
  });
});
