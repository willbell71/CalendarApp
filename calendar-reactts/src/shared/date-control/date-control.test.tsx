import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { DateControl, TProps } from './date-control';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, DateControl>;
beforeEach(() => {
  props = {
    prev: jest.fn(),
    today: jest.fn(),
    next: jest.fn()
  };

  wrapper = enzyme.shallow(<DateControl {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('DateControl', () => {
  it('should render', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(3);
  });

  it('should invoke prev prop if prev button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');

    expect(props.prev).toHaveBeenCalledTimes(1);
  });

  it('should invoke today prop if today button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');

    expect(props.today).toHaveBeenCalledTimes(1);
  });

  it('should invoke prev prop if prev button is clicked', () => {
    wrapper.find('button').at(2).simulate('click');

    expect(props.next).toHaveBeenCalledTimes(1);
  });
});
