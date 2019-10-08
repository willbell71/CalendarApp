import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { EventInfo, TState } from './event-info';

enzyme.configure({ adapter: new Adapter() });

let wrapper: enzyme.ShallowWrapper<{}, TState, EventInfo>;
beforeEach(() => {
  wrapper = enzyme.shallow(<EventInfo/>);
});
afterEach(() => jest.restoreAllMocks());

describe('EventInfo', () => {
  it('should render', () => {
    wrapper.setState({open: true});

    expect(wrapper.find('input').length).toEqual(3);
  });

  it('should change state when opened', () => {
    wrapper.find('div').at(0).simulate('click');

    expect(wrapper.state().open).toEqual(true);
  });
});
