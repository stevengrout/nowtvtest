/* global describe it expect */

import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-15.4';
import Enzyme, { shallow } from 'enzyme';
import MessageList from './MessageList';
import { testData } from "./messageList-testdata"

Enzyme.configure({ adapter: new Adapter() });

describe('MessageList details', () => {
  it('should render a list of messages', () => {
    const output = shallow((
      <MessageList messages={testData}/>
    ));
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should render when list of messages is empty', () => {
    const output = shallow((
      <MessageList messages={[]}/>
    ));
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
