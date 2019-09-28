import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { TitleBar, TProps } from './title-bar';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, TitleBar>;
beforeEach(() => {
  props = {
    date: new Date(2019, 8, 28),
    showDate: false,
    showMonth: false,
    showYear: false,
    showDay: false,
    prev: jest.fn(),
    today: jest.fn(),
    next: jest.fn()
  };

  wrapper = enzyme.shallow(<TitleBar {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('TitleBar', () => {
  it('should render', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('shouldnt render any elements', () => {
    expect(wrapper.find('DayOfMonth').length).toEqual(0);
    expect(wrapper.find('MonthOfYear').length).toEqual(0);
    expect(wrapper.find('Year').length).toEqual(0);
    expect(wrapper.find('DayOfWeek').length).toEqual(0);
  });

  it('should render date', () => {
    wrapper.setProps({
      showDate: true
    });

    expect(wrapper.find('DayOfMonth').length).toEqual(1);
  });

  it('should render month', () => {
    wrapper.setProps({
      showMonth: true
    });

    expect(wrapper.find('MonthOfYear').length).toEqual(1);
  });

  it('should render year', () => {
    wrapper.setProps({
      showYear: true
    });

    expect(wrapper.find('Year').length).toEqual(1);
  });

  it('should render day', () => {
    wrapper.setProps({
      showDay: true
    });

    expect(wrapper.find('DayOfWeek').length).toEqual(1);
  });

  it('should render DateControl', () => {
    expect(wrapper.find('DateControl').length).toEqual(1);
  });

  it('should invoke prev prop on DateControl prev event', () => {
    (wrapper.find('DateControl').prop('prev') as () => void)();

    expect(props.prev).toHaveBeenCalledTimes(1);
  });

  it('should invoke today prop on DateControl today event', () => {
    (wrapper.find('DateControl').prop('today') as () => void)();

    expect(props.today).toHaveBeenCalledTimes(1);
  });

  it('should invoke next prop on DateControl next event', () => {
    (wrapper.find('DateControl').prop('next') as () => void)();

    expect(props.next).toHaveBeenCalledTimes(1);
  });
});
