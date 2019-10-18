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
    expect(wrapper.find('section').length).toEqual(1);
    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
  });
});
