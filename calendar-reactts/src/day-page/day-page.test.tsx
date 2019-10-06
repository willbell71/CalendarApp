import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { DayPage, TProps } from './day-page';
import { calendarServiceMock } from '../mocks/calendar.service.mock';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, DayPage>;
beforeEach(() => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date(),
    today: new Date('2019-10-01T02:10:00.000')
  };

  wrapper = enzyme.shallow(<DayPage {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('DayPage', () => {
  it('should render', () => {
    expect(wrapper.find('p').length).toEqual(25);
    expect(wrapper.find('div').length).toEqual(25 + 4);
    expect(wrapper.find('Month').length).toEqual(1);
    expect(wrapper.find('DayEvent').length).toEqual(1);
  });

  it('should render times', () => {
    expect(wrapper.find('p').at(0).text()).toEqual('All Day');
    expect(wrapper.find('p').at(1).text()).toEqual('00:00');
    expect(wrapper.find('p').at(2).text()).toEqual('01:00');
    expect(wrapper.find('p').at(3).text()).toEqual('02:00');
    expect(wrapper.find('p').at(4).text()).toEqual('03:00');
    expect(wrapper.find('p').at(5).text()).toEqual('04:00');
    expect(wrapper.find('p').at(6).text()).toEqual('05:00');
    expect(wrapper.find('p').at(7).text()).toEqual('06:00');
    expect(wrapper.find('p').at(8).text()).toEqual('07:00');
    expect(wrapper.find('p').at(9).text()).toEqual('08:00');
    expect(wrapper.find('p').at(10).text()).toEqual('09:00');
    expect(wrapper.find('p').at(11).text()).toEqual('10:00');
    expect(wrapper.find('p').at(12).text()).toEqual('11:00');
    expect(wrapper.find('p').at(13).text()).toEqual('12:00');
    expect(wrapper.find('p').at(14).text()).toEqual('13:00');
    expect(wrapper.find('p').at(15).text()).toEqual('14:00');
    expect(wrapper.find('p').at(16).text()).toEqual('15:00');
    expect(wrapper.find('p').at(17).text()).toEqual('16:00');
    expect(wrapper.find('p').at(18).text()).toEqual('17:00');
    expect(wrapper.find('p').at(19).text()).toEqual('18:00');
    expect(wrapper.find('p').at(20).text()).toEqual('19:00');
    expect(wrapper.find('p').at(21).text()).toEqual('20:00');
    expect(wrapper.find('p').at(22).text()).toEqual('21:00');
    expect(wrapper.find('p').at(23).text()).toEqual('22:00');
    expect(wrapper.find('p').at(24).text()).toEqual('23:00');
  });

  it('shouldnt render weekend for mon', () => {
    props.date = new Date(2019, 8, 30);
    wrapper = enzyme.shallow(<DayPage {...props}/>);

    expect(wrapper.find('div').at(2).hasClass('day-page__cell--weekend')).toBeFalsy();
  });

  it('should render weekend for sat', () => {
    props.date = new Date(2019, 9, 5);
    wrapper = enzyme.shallow(<DayPage {...props}/>);

    expect(wrapper.find('div').at(2).hasClass('day-page__cell--weekend')).toBeTruthy();
  });

  it('should render weekend for sun', () => {
    props.date = new Date(2019, 9, 6);
    wrapper = enzyme.shallow(<DayPage {...props}/>);

    expect(wrapper.find('div').at(2).hasClass('day-page__cell--weekend')).toBeTruthy();
  });

  it('should render now', () => {
    expect(wrapper.find('p').at(2).hasClass('day-page__time--now')).toBeFalsy();
    expect(wrapper.find('p').at(3).hasClass('day-page__time--now')).toBeTruthy();
    expect(wrapper.find('p').at(4).hasClass('day-page__time--now')).toBeFalsy();

    expect(wrapper.find('div').at(4).hasClass('day-page__cell--now')).toBeFalsy();
    expect(wrapper.find('div').at(5).hasClass('day-page__cell--now')).toBeTruthy();
    expect(wrapper.find('div').at(6).hasClass('day-page__cell--now')).toBeFalsy();
  });
});
