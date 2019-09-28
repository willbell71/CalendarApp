import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { DayOfMonth, TProps } from './day-of-month';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, DayOfMonth>;
beforeEach(() => {
  props = {
    date: new Date(2019, 8, 28)
  };

  wrapper = enzyme.shallow(<DayOfMonth {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('DayOfMonth', () => {
  it('should render', () => {
    expect(wrapper.text()).toEqual('28');
  });
});
