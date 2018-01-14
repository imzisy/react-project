/* eslint-env jest */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowMessage from '../../src/components/ShowMessage';

configure({ adapter: new Adapter() });

const message = 'Welcome to React';
const wrapper = shallow(<ShowMessage message={message} />);

describe('Show Message Component', () => {
  it('should show expected message', () => {
    expect(wrapper.props().children).toEqual(message);
  });

  it('should have an flash class name', () => {
    expect(wrapper.find('.flash')).toHaveLength(1);
  });

  it('it has Welcome to React', () => {
    expect(wrapper).toHaveLength(1);
  });
});
