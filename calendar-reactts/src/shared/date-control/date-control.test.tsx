import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { DateControl, TProps } from './date-control';
import { EPeriod } from '../../EPeriod';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    prev: jest.fn(),
    today: jest.fn(),
    next: jest.fn(),
    period: EPeriod.eMonth
  };

  await act(async () => {
    renderer = create(
      <DateControl { ...props } />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('DateControl', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should invoke prev prop if prev button is clicked', async () => {
    const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'date-control-button-prev' });

    await act(async () => button.props.onClick());

    expect(props.prev).toHaveBeenCalledTimes(1);
    expect(props.prev).toHaveBeenCalledWith(EPeriod.eMonth);
  });

  it('should invoke today prop if today button is clicked', async () => {
    const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'date-control-button-today' });

    await act(async () => button.props.onClick());

    expect(props.today).toHaveBeenCalledTimes(1);
  });

  it('should invoke next prop if next button is clicked', async () => {
    const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'date-control-button-next' });

    await act(async () => button.props.onClick());

    expect(props.next).toHaveBeenCalledTimes(1);
    expect(props.next).toHaveBeenCalledWith(EPeriod.eMonth);
  });
});
