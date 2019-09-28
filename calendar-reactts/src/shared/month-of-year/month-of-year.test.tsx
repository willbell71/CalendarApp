import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { MonthOfYear, TProps } from './month-of-year';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, MonthOfYear>;
beforeEach(() => {
  props = {
    date: new Date(2019, 8, 28)
  };

  wrapper = enzyme.shallow(<MonthOfYear {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('MonthOfYear', () => {
  it('should render', () => {
    expect(wrapper.text()).toEqual('September');
  });
});
