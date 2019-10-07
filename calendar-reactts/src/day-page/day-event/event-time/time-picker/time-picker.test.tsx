import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { TimePicker } from './time-picker';

enzyme.configure({ adapter: new Adapter() });

let wrapper: enzyme.ShallowWrapper<{}, {}, TimePicker>;
beforeEach(() => {
  wrapper = enzyme.shallow(<TimePicker/>);
});
afterEach(() => jest.restoreAllMocks());

describe('TimePicker', () => {
  it('should render', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });
});
