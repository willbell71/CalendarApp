import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { calendarServiceMock } from '../mocks/calendar.service.mock';
import { TProps, WeekPage } from './week-page';

calendarServiceMock.getStartOfMonthGridDate = jest.fn().mockImplementation((start: Date): Date => new Date(2019, 8, 26));
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
      <WeekPage { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('WeekPage', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render day and date as column titles', () => {
    const titles: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'week-page-title' });

    expect(titles[0].props.children[0]).toEqual('Mon');
    expect(titles[1].props.children[0]).toEqual('Tue');
    expect(titles[2].props.children[0]).toEqual('Wed');
    expect(titles[3].props.children[0]).toEqual('Thu');
    expect(titles[4].props.children[0]).toEqual('Fri');
    expect(titles[5].props.children[0]).toEqual('Sat');
    expect(titles[6].props.children[0]).toEqual('Sun');
  });

  it('should render all day and times as row titles', () => {
    const times: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'week-page-time' });

    expect(times[0].props.children).toEqual('All Day');
    expect(times[1].props.children).toEqual('00:00');
    expect(times[2].props.children).toEqual('01:00');
    expect(times[3].props.children).toEqual('02:00');
    expect(times[4].props.children).toEqual('03:00');
    expect(times[5].props.children).toEqual('04:00');
    expect(times[6].props.children).toEqual('05:00');
    expect(times[7].props.children).toEqual('06:00');
    expect(times[8].props.children).toEqual('07:00');
    expect(times[9].props.children).toEqual('08:00');
    expect(times[10].props.children).toEqual('09:00');
    expect(times[11].props.children).toEqual('10:00');
    expect(times[12].props.children).toEqual('11:00');
    expect(times[13].props.children).toEqual('12:00');
    expect(times[14].props.children).toEqual('13:00');
    expect(times[15].props.children).toEqual('14:00');
    expect(times[16].props.children).toEqual('15:00');
    expect(times[17].props.children).toEqual('16:00');
    expect(times[18].props.children).toEqual('17:00');
    expect(times[19].props.children).toEqual('18:00');
    expect(times[20].props.children).toEqual('19:00');
    expect(times[21].props.children).toEqual('20:00');
    expect(times[22].props.children).toEqual('21:00');
    expect(times[23].props.children).toEqual('22:00');
    expect(times[24].props.children).toEqual('23:00');
  });

  it('should highlight the weekend', () => {
    const titles: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'week-page-title' });

    expect(titles[4].props.className.includes('week-page__day--weekend')).toBeFalsy();
    expect(titles[5].props.className.includes('week-page__day--weekend')).toBeTruthy();
    expect(titles[6].props.className.includes('week-page__day--weekend')).toBeTruthy();
  });

  it('should highlight today', () => {
    const dates: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'week-page-date' });

    expect(dates[0].props.className.includes('week-page__day-date--today')).toBeFalsy();
    expect(dates[1].props.className.includes('week-page__day-date--today')).toBeTruthy();
  });

  it('should highlight now', () => {
    const times: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'week-page-time' });

    expect(times[2].props.className.includes('week-page__time--now')).toBeFalsy();
    expect(times[3].props.className.includes('week-page__time--now')).toBeTruthy();
    expect(times[4].props.className.includes('week-page__time--now')).toBeFalsy();

    const cells: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'week-page-title-cell' });

    expect(cells[20].props.className.includes('week-page__cell--now')).toBeFalsy();
    expect(cells[21].props.className.includes('week-page__cell--now')).toBeTruthy();
    expect(cells[22].props.className.includes('week-page__cell--now')).toBeTruthy();
    expect(cells[23].props.className.includes('week-page__cell--now')).toBeTruthy();
    expect(cells[24].props.className.includes('week-page__cell--now')).toBeTruthy();
    expect(cells[25].props.className.includes('week-page__cell--now')).toBeTruthy();
    expect(cells[26].props.className.includes('week-page__cell--now')).toBeTruthy();
    expect(cells[27].props.className.includes('week-page__cell--now')).toBeTruthy();
    expect(cells[28].props.className.includes('week-page__cell--now')).toBeFalsy();
  });

  it('should NOT render for not today', async () => {
    props.today = new Date('2018-10-01T02:10:00.000');

    await act(async () => renderer.update(<WeekPage { ...props } />));

    const times: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'week-page-time' });

    for (let pCount: number = 0; pCount < 8; pCount++) {
      expect(times[pCount].props.className.includes('week-page__time--now')).toBeFalsy();
    }

    const cells: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'week-page-title-cell' });

    for (let divCount: number = 0; divCount < 8; divCount++) {
      expect(cells[divCount].props.className.includes('week-page__cell--now')).toBeFalsy();
    }
  });
});
