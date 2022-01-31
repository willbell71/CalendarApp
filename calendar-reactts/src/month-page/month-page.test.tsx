import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { calendarServiceMock } from '../mocks/calendar.service.mock';
import { MonthPage, TProps } from './month-page';

calendarServiceMock.getStartOfMonthGridDate = jest.fn().mockImplementation((start: Date): Date => new Date(2019, 8, 26));
let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date(),
    today: new Date(2019, 8, 26)
  };

  await act(async () => {
    renderer = create(
      <MonthPage { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('MonthPage', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render day long titles', () => {
    const days: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'month-page-day' });

    expect(days[0].props.children).toEqual('Mon');
    expect(days[1].props.children).toEqual('Tue');
    expect(days[2].props.children).toEqual('Wed');
    expect(days[3].props.children).toEqual('Thu');
    expect(days[4].props.children).toEqual('Fri');
    expect(days[5].props.children).toEqual('Sat');
    expect(days[6].props.children).toEqual('Sun');
  });

  it('should render first day as 26', () => {
    const dates: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'month-page-date' });

    expect(dates[0].props.children).toEqual(26);
  });

  it('should add class month-page__cell-date--today to today', () => {
    const dates: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'month-page-date' });

    expect((dates[0].props.className as string).includes('month-page__cell-date--today')).toBeTruthy();
  });

  it('should add class month-page__cell--weekend to weekend', () => {
    const containers: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'month-page-date-container' });

    expect((containers[6].props.className as string).includes('month-page__cell--weekend')).toBeTruthy();
  });

  it('should add class month-page__cell--dead to days outside active month', () => {
    const containers: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'month-page-date-container' });

    expect((containers[2].props.className as string).includes('month-page__cell--dead')).toBeTruthy();
  });
});
