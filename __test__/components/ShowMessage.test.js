/* eslint-env jest */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowMessage from '../../src/components/ShowMessage';

configure({ adapter: new Adapter() });

describe('Show Message Component', () => {
  it('it has Welcome to React', () => {
    const wrapper = shallow(<ShowMessage message="Welcome to React" />);
    expect(wrapper).toHaveLength(1);
  });
});
