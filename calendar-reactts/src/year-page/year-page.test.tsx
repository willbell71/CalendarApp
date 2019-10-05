import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { YearPage, TProps } from './year-page';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, YearPage>;
beforeEach(() => {
  props = {
    calendarService: {
      getDayName: jest.fn().mockImplementation((dayIndex: number): string => 'Monday'),
      getMonthName: jest.fn().mockImplementation((monthIndex: number): string => 'January'),
      getDayColumnTitle: jest.fn().mockImplementation((): string[] => ['M', 'T', 'W', 'T', 'F', 'S', 'S']),
      getDayColumnLongTitle: jest.fn().mockImplementation((): string[] => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']),
      getStartOfMonthGridDate: jest.fn().mockImplementation((start: Date): Date => new Date(2019, 8, 28))
    },
    date: new Date(2019, 8, 28),
    today: new Date(2019, 8, 28)
  };

  wrapper = enzyme.shallow(<YearPage {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('YearPage', () => {
  it('should render', () => {
    expect(wrapper.find('MonthOfYear').length).toEqual(12);
    expect(wrapper.find('Month').length).toEqual(12);
  });

  it('should render month', () => {
    expect(
      (wrapper.find('MonthOfYear').at(0).prop('date') as Date).getFullYear()
    ).toEqual(props.date.getFullYear());

    expect(
      (wrapper.find('MonthOfYear').at(0).prop('date') as Date).getDate()
    ).toEqual(1);

    expect(
      (wrapper.find('MonthOfYear').at(0).prop('date') as Date).getMonth()
    ).toEqual(0);

    expect(
      (wrapper.find('MonthOfYear').at(1).prop('date') as Date).getMonth()
    ).toEqual(1);

    expect(
      (wrapper.find('MonthOfYear').at(2).prop('date') as Date).getMonth()
    ).toEqual(2);

    expect(
      (wrapper.find('MonthOfYear').at(3).prop('date') as Date).getMonth()
    ).toEqual(3);

    expect(
      (wrapper.find('MonthOfYear').at(4).prop('date') as Date).getMonth()
    ).toEqual(4);

    expect(
      (wrapper.find('MonthOfYear').at(5).prop('date') as Date).getMonth()
    ).toEqual(5);

    expect(
      (wrapper.find('MonthOfYear').at(6).prop('date') as Date).getMonth()
    ).toEqual(6);

    expect(
      (wrapper.find('MonthOfYear').at(7).prop('date') as Date).getMonth()
    ).toEqual(7);

    expect(
      (wrapper.find('MonthOfYear').at(8).prop('date') as Date).getMonth()
    ).toEqual(8);

    expect(
      (wrapper.find('MonthOfYear').at(9).prop('date') as Date).getMonth()
    ).toEqual(9);

    expect(
      (wrapper.find('MonthOfYear').at(10).prop('date') as Date).getMonth()
    ).toEqual(10);

    expect(
      (wrapper.find('MonthOfYear').at(11).prop('date') as Date).getMonth()
    ).toEqual(11);
  });

  it('should render month', () => {
    expect(
      (wrapper.find('Month').at(0).prop('date') as Date).getFullYear()
    ).toEqual(props.date.getFullYear());

    expect(
      (wrapper.find('Month').at(0).prop('date') as Date).getDate()
    ).toEqual(1);

    expect(
      (wrapper.find('Month').at(0).prop('date') as Date).getMonth()
    ).toEqual(0);

    expect(
      (wrapper.find('Month').at(1).prop('date') as Date).getMonth()
    ).toEqual(1);

    expect(
      (wrapper.find('Month').at(2).prop('date') as Date).getMonth()
    ).toEqual(2);

    expect(
      (wrapper.find('Month').at(3).prop('date') as Date).getMonth()
    ).toEqual(3);

    expect(
      (wrapper.find('Month').at(4).prop('date') as Date).getMonth()
    ).toEqual(4);

    expect(
      (wrapper.find('Month').at(5).prop('date') as Date).getMonth()
    ).toEqual(5);

    expect(
      (wrapper.find('Month').at(6).prop('date') as Date).getMonth()
    ).toEqual(6);

    expect(
      (wrapper.find('Month').at(7).prop('date') as Date).getMonth()
    ).toEqual(7);

    expect(
      (wrapper.find('Month').at(8).prop('date') as Date).getMonth()
    ).toEqual(8);

    expect(
      (wrapper.find('Month').at(9).prop('date') as Date).getMonth()
    ).toEqual(9);

    expect(
      (wrapper.find('Month').at(10).prop('date') as Date).getMonth()
    ).toEqual(10);

    expect(
      (wrapper.find('Month').at(11).prop('date') as Date).getMonth()
    ).toEqual(11);
  });
});
