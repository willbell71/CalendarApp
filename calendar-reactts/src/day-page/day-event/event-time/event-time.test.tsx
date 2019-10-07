import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { EventTime } from './event-time';

enzyme.configure({ adapter: new Adapter() });

let wrapper: enzyme.ShallowWrapper<{}, {}, EventTime>;
beforeEach(() => {
  wrapper = enzyme.shallow(<EventTime/>);
});
afterEach(() => jest.restoreAllMocks());

describe('EventTime', () => {
  it('should render', () => {
    wrapper.setState({open: true});

    expect(wrapper.find('div').length).toEqual(5);
    expect(wrapper.find('p').length).toEqual(6);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('TimePicker').length).toEqual(2);
    expect(wrapper.find('select').length).toEqual(3);
    expect(wrapper.find('option').length).toEqual(25);
  });
});
