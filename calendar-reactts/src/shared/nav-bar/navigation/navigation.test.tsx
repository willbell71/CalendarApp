import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { Navigation } from './navigation';

let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  await act(async () => {
    renderer = create(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('Navigation', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should link to day', () => {
    const link: ReactTestInstance = instance.findByProps({ 'data-testid': 'navigation-day' });
    expect(link.props.to).toEqual('/day');
  });

  it('should link to week', () => {
    const link: ReactTestInstance = instance.findByProps({ 'data-testid': 'navigation-week' });
    expect(link.props.to).toEqual('/week');
  });

  it('should link to month', () => {
    const link: ReactTestInstance = instance.findByProps({ 'data-testid': 'navigation-month' });
    expect(link.props.to).toEqual('/month');
  });

  it('should link to year', () => {
    const link: ReactTestInstance = instance.findByProps({ 'data-testid': 'navigation-year' });
    expect(link.props.to).toEqual('/year');
  });
});
