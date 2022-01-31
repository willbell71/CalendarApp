import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { AddPopup } from './add-popup';

let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  await act(async () => {
    renderer = create(
      <AddPopup />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('AddPopup', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });
});
