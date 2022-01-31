import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { calendarServiceMock } from '../../mocks/calendar.service.mock';
import { EPeriod } from '../../EPeriod';
import { TitleBar, TProps } from './title-bar';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date(2019, 8, 28),
    showDate: false,
    showMonth: false,
    showYear: false,
    showDay: false,
    prev: jest.fn(),
    today: jest.fn(),
    next: jest.fn(),
    period: EPeriod.eMonth
  };

  await act(async () => {
    renderer = create(
      <TitleBar { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('TitleBar', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should NOT render any elements', () => {
    const daysOfMonth: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'title-bar-day-of-month' });
    const monthsOfYear: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'title-bar-month-of-year' });
    const years: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'title-bar-year' });
    const daysOfWeek: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'title-bar-day-of-week' });

    expect(daysOfMonth.length).toEqual(0);
    expect(monthsOfYear.length).toEqual(0);
    expect(years.length).toEqual(0);
    expect(daysOfWeek.length).toEqual(0);
  });

  it('should render date', async () => {
    props.showDate = true;

    await act(async () => renderer.update(<TitleBar { ...props } />));

    const daysOfMonth: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'title-bar-day-of-month' });
    expect(daysOfMonth.length).toEqual(1);
  });

  it('should render month', async () => {
    props.showMonth = true;

    await act(async () => renderer.update(<TitleBar { ...props } />));

    const monthsOfYear: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'title-bar-month-of-year' });
    expect(monthsOfYear.length).toEqual(1);
  });

  it('should render year', async () => {
    props.showYear = true;

    await act(async () => renderer.update(<TitleBar { ...props } />));

    const years: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'title-bar-year' });
    expect(years.length).toEqual(1);
  });

  it('should render day', async () => {
    props.showDay = true;

    await act(async () => renderer.update(<TitleBar { ...props } />));

    const daysOfWeek: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'title-bar-day-of-week' });
    expect(daysOfWeek.length).toEqual(1);
  });

  it('should render DateControl', () => {
    const dateControl: ReactTestInstance = instance.findByProps({ 'data-testid': 'title-bar-date-control' });

    expect(dateControl.props.period).toEqual(EPeriod.eMonth);
  });

  it('should invoke prev prop on DateControl prev event', async () => {
    const dateControl: ReactTestInstance = instance.findByProps({ 'data-testid': 'title-bar-date-control' });

    await act(async () => dateControl.props.prev());

    expect(props.prev).toHaveBeenCalledTimes(1);
  });

  it('should invoke today prop on DateControl today event', async () => {
    const dateControl: ReactTestInstance = instance.findByProps({ 'data-testid': 'title-bar-date-control' });

    await act(async () => dateControl.props.today());

    expect(props.today).toHaveBeenCalledTimes(1);
  });

  it('should invoke next prop on DateControl next event', async () => {
    const dateControl: ReactTestInstance = instance.findByProps({ 'data-testid': 'title-bar-date-control' });

    await act(async () => dateControl.props.next());

    expect(props.next).toHaveBeenCalledTimes(1);
  });
});
