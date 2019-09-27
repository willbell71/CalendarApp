import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { TitleBar, TProps } from './title-bar';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<{}, {}, TitleBar>;
beforeEach(() => {
  props = {
    date: new Date()
  };

  wrapper = enzyme.shallow(<TitleBar {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('NavBar', () => {
  it('should render', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });
});
