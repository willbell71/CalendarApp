import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { calendarServiceMock } from '../../mocks/calendar.service.mock';
import { DayOfWeek, TProps } from './day-of-week';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, DayOfWeek>;
beforeEach(() => {
  props = {
    calendarService: calendarServiceMock,
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
