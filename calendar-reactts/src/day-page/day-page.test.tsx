import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { DayPage, TProps } from './day-page';

import { calendarServiceMock } from '../mocks/calendar.service.mock';

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
      <DayPage { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('DayPage', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render times', () => {
    const times: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'day-page-time' });

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

  it('should NOT render weekend for mon', async () => {
    props.date = new Date(2019, 8, 30);

    await act(async () => renderer.update(<DayPage { ...props } />));

    const weekends: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'day-page-weekend' });
    expect(weekends[0].props.className.includes('day-page__cell--weekend')).toBeFalsy();
  });

  it('should render weekend for sat', async () => {
    props.date = new Date(2019, 9, 5);

    await act(async () => renderer.update(<DayPage { ...props } />));

    const weekends: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'day-page-weekend' });
    expect(weekends[0].props.className.includes('day-page__cell--weekend')).toBeTruthy();
  });

  it('should render weekend for sun', async () => {
    props.date = new Date(2019, 9, 6);

    await act(async () => renderer.update(<DayPage { ...props } />));

    const weekends: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'day-page-weekend' });
    expect(weekends[0].props.className.includes('day-page__cell--weekend')).toBeTruthy();
  });

  it('should render now', () => {
    const times: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'day-page-time' });

    expect(times[2].props.className.includes('day-page__time--now')).toBeFalsy();
    expect(times[3].props.className.includes('day-page__time--now')).toBeTruthy();
    expect(times[4].props.className.includes('day-page__time--now')).toBeFalsy();

    const weekends: ReactTestInstance[] = instance.findAllByProps({ 'data-testid': 'day-page-weekend' });

    expect(weekends[2].props.className.includes('day-page__cell--now')).toBeFalsy();
    expect(weekends[3].props.className.includes('day-page__cell--now')).toBeTruthy();
    expect(weekends[4].props.className.includes('day-page__cell--now')).toBeFalsy();
  });
});
