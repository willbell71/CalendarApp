import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { calendarServiceMock } from '../mocks/calendar.service.mock';
import { MonthPage, TProps } from './month-page';

enzyme.configure({ adapter: new Adapter() });

calendarServiceMock.getStartOfMonthGridDate = jest.fn().mockImplementation((start: Date): Date => new Date(2019, 8, 26));
let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, MonthPage>;
beforeEach(() => {
  props = {
    calendarService: calendarServiceMock,
    date: new Date(),
    today: new Date(2019, 8, 26)
  };

  wrapper = enzyme.shallow(<MonthPage {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('MonthPage', () => {
  it('should render', () => {
    expect(wrapper.find('p').length).toEqual(7 * 7);
  });

  it('should render day long titles', () => {
    expect(wrapper.find('p').at(0).text()).toEqual('Mon');
    expect(wrapper.find('p').at(1).text()).toEqual('Tue');
    expect(wrapper.find('p').at(2).text()).toEqual('Wed');
    expect(wrapper.find('p').at(3).text()).toEqual('Thu');
    expect(wrapper.find('p').at(4).text()).toEqual('Fri');
    expect(wrapper.find('p').at(5).text()).toEqual('Sat');
    expect(wrapper.find('p').at(6).text()).toEqual('Sun');
  });

  it('should render first day as 26', () => {
    expect(wrapper.find('p').at(7).find('p').at(0).text()).toEqual('26');
  });

  it('should add class month-page__cell-date--today to today', () => {
    expect(wrapper.find('p').at(7).hasClass('month-page__cell-date--today')).toBeTruthy();
  });

  it('should add class month-page__cell--weekend to weekend', () => {
    expect(wrapper.find('div').at(6).hasClass('month-page__cell--weekend')).toBeTruthy();
  });

  it('should add class month-page__cell--dead to days outside active month', () => {
    expect(wrapper.find('div').at(2).hasClass('month-page__cell--dead')).toBeTruthy();
  });
});
