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
    expect(wrapper.find('p').length).toEqual(1);
  });
});
