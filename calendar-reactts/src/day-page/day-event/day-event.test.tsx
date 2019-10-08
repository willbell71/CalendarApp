import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { DayEvent } from './day-event';

enzyme.configure({ adapter: new Adapter() });

let wrapper: enzyme.ShallowWrapper<{}, {}, DayEvent>;
beforeEach(() => {
  wrapper = enzyme.shallow(<DayEvent/>);
});
afterEach(() => jest.restoreAllMocks());

describe('DayEvent', () => {
  it('should render', () => {
    expect(wrapper.find('div').length).toEqual(2);
    expect(wrapper.find('input').length).toEqual(3);
    expect(wrapper.find('select').length).toEqual(1);
    expect(wrapper.find('option').length).toEqual(2);
    expect(wrapper.find('EventTime').length).toEqual(1);
    expect(wrapper.find('EventInfo').length).toEqual(1);
  });
});
