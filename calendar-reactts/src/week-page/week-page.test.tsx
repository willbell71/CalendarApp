import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { calendarServiceMock } from '../mocks/calendar.service.mock';
import { TProps, WeekPage } from './week-page';

enzyme.configure({ adapter: new Adapter() });

calendarServiceMock.getStartOfMonthGridDate = jest.fn().mockImplementation((start: Date): Date => new Date(2019, 8, 26));
let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, WeekPage>;
beforeEach(() => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date(),
    today: new Date('2019-10-01T02:10:00.000')
  };

  wrapper = enzyme.shallow(<WeekPage {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('WeekPage', () => {
  it('should render', () => {
    expect(wrapper.find('p').length).toEqual(8 + 25);
    expect(wrapper.find('div').length).toEqual(1 + (7 * 25));
  });

  it ('should render blank in first cell', () => {
    expect(wrapper.find('p').at(0).text()).toEqual('');
  });

  it('should render day and date as column titles', () => {
    expect(wrapper.find('p').at(1).text()).toEqual(expect.stringMatching(/^Mon\d{1,2}$/));
    expect(wrapper.find('p').at(2).text()).toEqual(expect.stringMatching(/^Tue\d{1,2}$/));
    expect(wrapper.find('p').at(3).text()).toEqual(expect.stringMatching(/^Wed\d{1,2}$/));
    expect(wrapper.find('p').at(4).text()).toEqual(expect.stringMatching(/^Thu\d{1,2}$/));
    expect(wrapper.find('p').at(5).text()).toEqual(expect.stringMatching(/^Fri\d{1,2}$/));
    expect(wrapper.find('p').at(6).text()).toEqual(expect.stringMatching(/^Sat\d{1,2}$/));
    expect(wrapper.find('p').at(7).text()).toEqual(expect.stringMatching(/^Sun\d{1,2}$/));
  });

  it('should render all day and times as row titles', () => {
    expect(wrapper.find('p').at(8).text()).toEqual('All Day');
    expect(wrapper.find('p').at(9).text()).toEqual('00:00');
    expect(wrapper.find('p').at(10).text()).toEqual('01:00');
    expect(wrapper.find('p').at(11).text()).toEqual('02:00');
    expect(wrapper.find('p').at(12).text()).toEqual('03:00');
    expect(wrapper.find('p').at(13).text()).toEqual('04:00');
    expect(wrapper.find('p').at(14).text()).toEqual('05:00');
    expect(wrapper.find('p').at(15).text()).toEqual('06:00');
    expect(wrapper.find('p').at(16).text()).toEqual('07:00');
    expect(wrapper.find('p').at(17).text()).toEqual('08:00');
    expect(wrapper.find('p').at(18).text()).toEqual('09:00');
    expect(wrapper.find('p').at(19).text()).toEqual('10:00');
    expect(wrapper.find('p').at(20).text()).toEqual('11:00');
    expect(wrapper.find('p').at(21).text()).toEqual('12:00');
    expect(wrapper.find('p').at(22).text()).toEqual('13:00');
    expect(wrapper.find('p').at(23).text()).toEqual('14:00');
    expect(wrapper.find('p').at(24).text()).toEqual('15:00');
    expect(wrapper.find('p').at(25).text()).toEqual('16:00');
    expect(wrapper.find('p').at(26).text()).toEqual('17:00');
    expect(wrapper.find('p').at(27).text()).toEqual('18:00');
    expect(wrapper.find('p').at(28).text()).toEqual('19:00');
    expect(wrapper.find('p').at(29).text()).toEqual('20:00');
    expect(wrapper.find('p').at(30).text()).toEqual('21:00');
    expect(wrapper.find('p').at(31).text()).toEqual('22:00');
    expect(wrapper.find('p').at(32).text()).toEqual('23:00');
  });

  it('should highlight the weekend', () => {
    expect(wrapper.find('p').at(5).hasClass('week-page__day--weekend')).toBeFalsy();
    expect(wrapper.find('p').at(6).hasClass('week-page__day--weekend')).toBeTruthy();
    expect(wrapper.find('p').at(7).hasClass('week-page__day--weekend')).toBeTruthy();
  });

  it('should highlight today', () => {
    expect(wrapper.find('p').at(1).find('span').hasClass('week-page__day-date--today')).toBeFalsy();
    expect(wrapper.find('p').at(2).find('span').hasClass('week-page__day-date--today')).toBeTruthy();
  });

  it('should highlight now', () => {
    expect(wrapper.find('p').at(10).hasClass('week-page__time--now')).toBeFalsy();
    expect(wrapper.find('p').at(11).hasClass('week-page__time--now')).toBeTruthy();
    expect(wrapper.find('p').at(12).hasClass('week-page__time--now')).toBeFalsy();

    expect(wrapper.find('div').at(21).hasClass('week-page__cell--now')).toBeFalsy();
    expect(wrapper.find('div').at(22).hasClass('week-page__cell--now')).toBeTruthy();
    expect(wrapper.find('div').at(23).hasClass('week-page__cell--now')).toBeTruthy();
    expect(wrapper.find('div').at(24).hasClass('week-page__cell--now')).toBeTruthy();
    expect(wrapper.find('div').at(25).hasClass('week-page__cell--now')).toBeTruthy();
    expect(wrapper.find('div').at(26).hasClass('week-page__cell--now')).toBeTruthy();
    expect(wrapper.find('div').at(27).hasClass('week-page__cell--now')).toBeTruthy();
    expect(wrapper.find('div').at(28).hasClass('week-page__cell--now')).toBeTruthy();
    expect(wrapper.find('div').at(29).hasClass('week-page__cell--now')).toBeFalsy();
  });

  it('shouldnt render for not today', () => {
    props.today = new Date('2018-10-01T02:10:00.000');
    wrapper = enzyme.shallow(<WeekPage {...props}/>);

    for (let pCount: number = 0; pCount < 8; pCount++) {
      expect(wrapper.find('p').at(pCount).hasClass('week-page__time--now')).toBeFalsy();
    }

    for (let divCount: number = 0; divCount < 8; divCount++) {
      expect(wrapper.find('div').at(divCount).hasClass('week-page__cell--now')).toBeFalsy();
    }
  });
});
