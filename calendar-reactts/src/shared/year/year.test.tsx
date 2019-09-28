import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Year, TProps } from './year';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, Year>;
beforeEach(() => {
  props = {
    date: new Date(2019, 8, 28)
  };

  wrapper = enzyme.shallow(<Year {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('Year', () => {
  it('should render', () => {
    expect(wrapper.text()).toEqual('2019');
  });
});
