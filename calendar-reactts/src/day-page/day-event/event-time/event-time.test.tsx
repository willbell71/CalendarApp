import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { EventTime, TProps, TState } from './event-time';

import { calendarServiceMock } from '../../../mocks/calendar.service.mock';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<TProps, TState, EventTime>;
beforeEach(() => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date(),
    today: new Date('2019-10-01T02:10:00.000')
  };
  wrapper = enzyme.shallow(<EventTime {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('EventTime', () => {
  it('should render', () => {
    wrapper.setState({open: true});

    expect(wrapper.find('div').length).toEqual(6);
    expect(wrapper.find('p').length).toEqual(6);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('TimePicker').length).toEqual(2);
    expect(wrapper.find('select').length).toEqual(3);
    expect(wrapper.find('option').length).toEqual(25);
  });

  it('should change state when opened', () => {
    wrapper.find('div').at(0).simulate('click');

    expect(wrapper.state().open).toEqual(true);
  });
});
