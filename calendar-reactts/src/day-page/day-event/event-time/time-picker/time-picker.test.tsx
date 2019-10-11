import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { TimePicker, TProps, TState } from './time-picker';

import { calendarServiceMock } from '../../../../mocks/calendar.service.mock';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<TProps, TState, TimePicker>;
beforeEach(() => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date('2019-10-11T09:30:00.000'),
    today: new Date('2019-10-01T02:10:00.000')
  };
  wrapper = enzyme.shallow(<TimePicker {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('TimePicker', () => {
  it('should render', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('span').length).toEqual(2);
    expect(wrapper.find('Month').length).toEqual(0);
  });

  it('should render the date', () => {
    expect(wrapper.find('span').at(0).text()).toEqual('11/10/2019');
  });

  it('should render the time', () => {
    expect(wrapper.find('span').at(1).text()).toEqual('09:30');
  });

  it('should set state to open when toggled', () => {
    expect(wrapper.state().open).toEqual(false);

    wrapper.find('div').at(0).simulate('click');

    expect(wrapper.state().open).toEqual(true);
  });

  it('should render the month when open', () => {
    wrapper.setState({open: true});

    expect(wrapper.find('Month').length).toEqual(1);
    expect(wrapper.find('Month').prop('calendarService')).toEqual(props.calendarService);
    expect(wrapper.find('Month').prop('date')).toEqual(props.date);
    expect(wrapper.find('Month').prop('today')).toEqual(props.today);
  });
});
