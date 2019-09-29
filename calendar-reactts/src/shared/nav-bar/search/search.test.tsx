import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Search, TProps } from './search';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, Search>;
beforeEach(() => {
  props = {
    search: jest.fn()
  };

  wrapper = enzyme.shallow(<Search {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('Search', () => {
  it('should render', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });
});
