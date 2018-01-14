/* eslint-env jest */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowMessage from '../../src/components/ShowMessage';

configure({ adapter: new Adapter() });

const wrapper = shallow(<ShowMessage message="Welcome to React" />);

describe('Show Message Component', () => {
  it('should have an flash class name', () => {
    expect(wrapper.find('.flash')).toHaveLength(1);
  });

  it('it has Welcome to React', () => {
    expect(wrapper).toHaveLength(1);
  });
});
