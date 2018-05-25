/* global describe it expect */

import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-15.4';
import Enzyme, { shallow } from 'enzyme';
import Message from './Message';

Enzyme.configure({ adapter: new Adapter() });

describe('Message details', () => {
  it('should render all the properties', () => {
    const output = shallow((
      <Message message={'mockMessage'} avatar={'http://dummyimage.com/100x100.jpg/ff4444/ffffff'}
               time={'2016-04-07T10:20:42Z'} email={'test.me@testing.com'}/>
    ));
    expect(shallowToJson(output)).toMatchSnapshot();
    expect(output.prop('class'));
  });
});
