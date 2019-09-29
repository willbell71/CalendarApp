import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Navigation } from './navigation';

enzyme.configure({ adapter: new Adapter() });

let wrapper: enzyme.ShallowWrapper<{}, {}, Navigation>;
beforeEach(() => {
  wrapper = enzyme.shallow(<Navigation/>);
});
afterEach(() => jest.restoreAllMocks());

describe('Navigation', () => {
  it('should render', () => {
    expect(wrapper.find('Link').length).toEqual(4);
  });

  it('should link to day', () => {
    expect(wrapper.find('Link').at(0).prop('to')).toEqual('/day');
  });

  it('should link to week', () => {
    expect(wrapper.find('Link').at(1).prop('to')).toEqual('/week');
  });

  it('should link to month', () => {
    expect(wrapper.find('Link').at(2).prop('to')).toEqual('/month');
  });

  it('should link to year', () => {
    expect(wrapper.find('Link').at(3).prop('to')).toEqual('/year');
  });
});
