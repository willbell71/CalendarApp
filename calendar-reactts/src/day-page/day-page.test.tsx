import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { DayPage, TProps } from './day-page';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, DayPage>;
beforeEach(() => {
  props = {
    date: new Date()
  };

  wrapper = enzyme.shallow(<DayPage {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('DayPage', () => {
  it('should render', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });
});
