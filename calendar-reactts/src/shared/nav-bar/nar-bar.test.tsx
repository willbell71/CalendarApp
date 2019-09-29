import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { NavBar, TProps } from './nav-bar';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, NavBar>;
beforeEach(() => {
  props = {
    calendars: jest.fn(),
    add: jest.fn(),
    search: jest.fn()
  };

  wrapper = enzyme.shallow(<NavBar {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('NavBar', () => {
  it('should render', () => {
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2);
    expect(wrapper.find('Navigation').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('should call calendars click handler if calendars is clicked', () => {
    wrapper.find('button').at(0).simulate('click');

    expect(props.calendars).toHaveBeenCalledTimes(1);
  });

  it('should call add click handler if add is clicked', () => {
    wrapper.find('button').at(1).simulate('click');

    expect(props.add).toHaveBeenCalledTimes(1);
  });

  it('should call search handler in response to search event', () => {
    (wrapper.find('Search').prop('search') as (term: string) => void)('test');

    expect(props.search).toHaveBeenCalledTimes(1);
    expect(props.search).toHaveBeenCalledWith('test');
  });
});
