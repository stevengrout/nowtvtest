/* global it expect */

import React from 'react';
import ReactDOM from 'react-dom';
import App, { getCombinedMessageData, compare } from './App';
import { messages, members, combinedResult } from './App-testdata'

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App.WrappedComponent />, div);
});

it('should combine messages and members correctly', () => {
  const combinedMessages = getCombinedMessageData(messages, members);
  expect(combinedMessages).toEqual(combinedResult);
});

it('should sort timestamps correctly', () => {
  const lower = compare({timestamp: "2016-04-10T14:18:39Z"}, {timestamp: "2016-08-10T14:18:39Z"});
  const equal = compare({timestamp: "2016-08-10T14:18:39Z"}, {timestamp: "2016-08-10T14:18:39Z"});
  const greater = compare({timestamp: "2016-08-10T14:18:39Z"}, {timestamp: "2016-05-10T14:18:39Z"});
  expect(lower).toEqual(-1);
  expect(greater).toEqual(1);
  expect(equal).toEqual(0);
});
