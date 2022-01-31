import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { NavBar, TProps } from './nav-bar';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    calendars: jest.fn(),
    add: jest.fn(),
    search: jest.fn()
  };

  await act(async () => {
    renderer = create(
      <MemoryRouter>
        <NavBar { ...props } />
      </MemoryRouter>
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('NavBar', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should call calendars click handler if calendars is clicked', async () => {
    const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'nav-bar-button-calendars' });

    await act(async () => button.props.onClick());

    expect(props.calendars).toHaveBeenCalledTimes(1);
  });

  it('should call add click handler if add is clicked', async () => {
    const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'nav-bar-button-add' });

    await act(async () => button.props.onClick());

    expect(props.add).toHaveBeenCalledTimes(1);
  });

  it('should call search handler in response to search event', async () => {
    const search: ReactTestInstance = instance.findByProps({ 'data-testid': 'nav-bar-search' });

    await act(async () => search.props.search('test'));

    expect(props.search).toHaveBeenCalledTimes(1);
    expect(props.search).toHaveBeenCalledWith('test');
  });
});
