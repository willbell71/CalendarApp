import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Month, TProps } from './month';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, Month>;
beforeEach(() => {
  props = {
    calendarService: {
      getDayName: jest.fn().mockImplementation((dayIndex: number): string => 'Monday'),
      getMonthName: jest.fn().mockImplementation((monthIndex: number): string => 'January'),
      getDayColumnTitle: jest.fn().mockImplementation((): string[] => ['M', 'T', 'W', 'T', 'F', 'S', 'S']),
      getDayColumnLongTitle: jest.fn().mockImplementation((): string[] => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']),
      getStartOfMonthGridDate: jest.fn().mockImplementation((start: Date): Date => new Date(2019, 8, 26))
    },
    date: new Date(2019, 8, 1),
    today: new Date(2019, 8, 26)
  };

  wrapper = enzyme.shallow(<Month {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('Month', () => {
  it('should render', () => {
    expect(wrapper.find('p').length).toEqual(7 * 7);
  });

  it('should render days from Monday', () => {
    expect(wrapper.find('p').at(0).text()).toEqual('M');
    expect(wrapper.find('p').at(1).text()).toEqual('T');
    expect(wrapper.find('p').at(2).text()).toEqual('W');
    expect(wrapper.find('p').at(3).text()).toEqual('T');
    expect(wrapper.find('p').at(4).text()).toEqual('F');
    expect(wrapper.find('p').at(5).text()).toEqual('S');
    expect(wrapper.find('p').at(6).text()).toEqual('S');
  });

  it('should start on 26', () => {
    expect(wrapper.find('p').at(7).text()).toEqual('26');
  });
});
