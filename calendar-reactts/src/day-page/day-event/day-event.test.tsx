import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { DayEvent, TProps } from './day-event';

import { calendarServiceMock } from '../../mocks/calendar.service.mock';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, DayEvent>;
beforeEach(() => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date(),
    today: new Date('2019-10-01T02:10:00.000')
  };
  wrapper = enzyme.shallow(<DayEvent {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('DayEvent', () => {
  it('should render', () => {
    expect(wrapper.find('div').length).toEqual(3);
    expect(wrapper.find('input').length).toEqual(3);
    expect(wrapper.find('select').length).toEqual(1);
    expect(wrapper.find('option').length).toEqual(2);
    expect(wrapper.find('EventTime').length).toEqual(1);
    expect(wrapper.find('EventInfo').length).toEqual(1);
  });
});
