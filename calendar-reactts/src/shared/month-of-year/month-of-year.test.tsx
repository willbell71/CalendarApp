import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { calendarServiceMock } from '../../mocks/calendar.service.mock';
import { MonthOfYear, TProps } from './month-of-year';

enzyme.configure({ adapter: new Adapter() });

calendarServiceMock.getMonthName = jest.fn().mockImplementation((monthIndex: number): string => 'September');
let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, MonthOfYear>;
beforeEach(() => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date(2019, 8, 28)
  };

  wrapper = enzyme.shallow(<MonthOfYear {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('MonthOfYear', () => {
  it('should render', () => {
    expect(wrapper.text()).toEqual('September');
  });
});
