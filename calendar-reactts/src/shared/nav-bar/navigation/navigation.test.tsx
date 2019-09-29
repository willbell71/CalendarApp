import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Navigation, TProps } from './navigation';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, Navigation>;
beforeEach(() => {
  props = {
    day: jest.fn(),
    week: jest.fn(),
    month: jest.fn(),
    year: jest.fn()
  };

  wrapper = enzyme.shallow(<Navigation {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('Navigation', () => {
  it('should render', () => {
    expect(wrapper.find('button').length).toEqual(4);
  });

  it('should call day handler if day button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');

    expect(props.day).toHaveBeenCalledTimes(1);
  });

  it('should call week handler if week button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');

    expect(props.week).toHaveBeenCalledTimes(1);
  });

  it('should call month handler if month button is clicked', () => {
    wrapper.find('button').at(2).simulate('click');

    expect(props.month).toHaveBeenCalledTimes(1);
  });

  it('should call year handler if year button is clicked', () => {
    wrapper.find('button').at(3).simulate('click');

    expect(props.year).toHaveBeenCalledTimes(1);
  });
});
