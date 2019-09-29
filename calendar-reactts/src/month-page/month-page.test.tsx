import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { MonthPage, TProps } from './month-page';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, MonthPage>;
beforeEach(() => {
  props = {
    date: new Date()
  };

  wrapper = enzyme.shallow(<MonthPage {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('MonthPage', () => {
  it('should render', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });
});
