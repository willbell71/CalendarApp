import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { TimePicker, TProps, TState } from './time-picker';

import { calendarServiceMock } from '../../../../mocks/calendar.service.mock';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date('2019-10-11T09:30:00.000'),
    today: new Date('2019-10-01T02:10:00.000')
  };

  await act(async () => {
    renderer = create(
      <TimePicker { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('TimePicker', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render the date', () => {
    const date: ReactTestInstance = instance.findByProps({ 'data-testid': 'time-picker-date' });

    expect(date.props.children).toEqual(['11', '/', '10', '/', 2019]);
  });

  it('should render the time', () => {
    const time: ReactTestInstance = instance.findByProps({ 'data-testid': 'time-picker-time' });

    expect(time.props.children).toEqual(['09', ':', '30']);
  });

  it('should set state to open when toggled', async () => {
    const toggle: ReactTestInstance = instance.findByProps({ 'data-testid': 'time-picker-toggle' });

    await act(async () => toggle.props.onClick());

    const open: ReactTestInstance = instance.findByProps({ 'data-testid': 'time-picker-open' });
    expect(open).toBeTruthy();
  });
});
