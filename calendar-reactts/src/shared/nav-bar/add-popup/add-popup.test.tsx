import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { AddPopup } from './add-popup';

enzyme.configure({ adapter: new Adapter() });

let wrapper: enzyme.ShallowWrapper<{}, {}, AddPopup>;
beforeEach(() => {
  wrapper = enzyme.shallow(<AddPopup/>);
});
afterEach(() => jest.restoreAllMocks());

describe('AddPopup', () => {
  it('should render', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
