import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { TProps, WeekPage } from './week-page';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, WeekPage>;
beforeEach(() => {
  props = {
    date: new Date()
  };

  wrapper = enzyme.shallow(<WeekPage {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('WeekPage', () => {
  it('should render', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });
});
