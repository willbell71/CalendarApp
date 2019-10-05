import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { DayOfWeek, TProps } from './day-of-week';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, DayOfWeek>;
beforeEach(() => {
  props = {
    calendarService: {
      getDayName: jest.fn().mockImplementation((dayIndex: number): string => 'Monday'),
      getMonthName: jest.fn().mockImplementation((monthIndex: number): string => 'January'),
      getDayColumnTitle: jest.fn().mockImplementation((): string[] => ['M', 'T', 'W', 'T', 'F', 'S', 'S']),
      getDayColumnLongTitle: jest.fn().mockImplementation((): string[] => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']),
      getStartOfMonthGridDate: jest.fn().mockImplementation((start: Date): Date => new Date(2019, 8, 28))
    },
    date: new Date(2019, 8, 28)
  };

  wrapper = enzyme.shallow(<DayOfWeek {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('DayOfWeek', () => {
  it('should render', () => {
    expect(wrapper.text()).toEqual('Monday');
  });
});
