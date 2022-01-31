import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { calendarServiceMock } from '../mocks/calendar.service.mock';
import { YearPage, TProps } from './year-page';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date(2019, 8, 28),
    today: new Date(2019, 8, 28)
  };

  await act(async () => {
    renderer = create(
      <YearPage { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('YearPage', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render month', () => {
    const monthsOfYear: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'year-page-month-of-year' });

    expect((monthsOfYear[0].props.date as Date).getFullYear()).toEqual(props.date.getFullYear());
    expect((monthsOfYear[0].props.date as Date).getDate()).toEqual(1);
    expect((monthsOfYear[0].props.date as Date).getMonth()).toEqual(0);

    expect((monthsOfYear[1].props.date as Date).getMonth()).toEqual(1);
    expect((monthsOfYear[2].props.date as Date).getMonth()).toEqual(2);
    expect((monthsOfYear[3].props.date as Date).getMonth()).toEqual(3);
    expect((monthsOfYear[4].props.date as Date).getMonth()).toEqual(4);
    expect((monthsOfYear[5].props.date as Date).getMonth()).toEqual(5);
    expect((monthsOfYear[6].props.date as Date).getMonth()).toEqual(6);
    expect((monthsOfYear[7].props.date as Date).getMonth()).toEqual(7);
    expect((monthsOfYear[8].props.date as Date).getMonth()).toEqual(8);
    expect((monthsOfYear[9].props.date as Date).getMonth()).toEqual(9);
    expect((monthsOfYear[10].props.date as Date).getMonth()).toEqual(10);
    expect((monthsOfYear[11].props.date as Date).getMonth()).toEqual(11);
  });

  it('should render month', () => {
    const months: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'year-page-month' });

    expect((months[0].props.date as Date).getFullYear()).toEqual(props.date.getFullYear());
    expect((months[0].props.date as Date).getDate()).toEqual(1);
    expect((months[0].props.date as Date).getMonth()).toEqual(0);
    expect((months[1].props.date as Date).getMonth()).toEqual(1);
    expect((months[2].props.date as Date).getMonth()).toEqual(2);
    expect((months[3].props.date as Date).getMonth()).toEqual(3);
    expect((months[4].props.date as Date).getMonth()).toEqual(4);
    expect((months[5].props.date as Date).getMonth()).toEqual(5);
    expect((months[6].props.date as Date).getMonth()).toEqual(6);
    expect((months[7].props.date as Date).getMonth()).toEqual(7);
    expect((months[8].props.date as Date).getMonth()).toEqual(8);
    expect((months[9].props.date as Date).getMonth()).toEqual(9);
    expect((months[10].props.date as Date).getMonth()).toEqual(10);
    expect((months[11].props.date as Date).getMonth()).toEqual(11);
  });
});
