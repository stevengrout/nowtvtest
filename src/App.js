import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getChatLog, getMemberList } from './service';
import MessageList from "./components/MessageList"

import './App.css';
import {store} from "./store"


export const compare = (a, b) => {
  if (a.timestamp < b.timestamp) {
    return -1;
  }
  if (a.timestamp > b.timestamp) {
    return 1;
  }
  return 0;
}

export const getCombinedMessageData = (messages, members) => {
  if (messages && members) {
    const combinedMessages = messages.map(message => {
      const mem = members.find(member => {
        return member.id === message.userId
      })
      return Object.assign(message, { 'email': mem.email, 'avatar': mem.avatar });
    })
    return combinedMessages.sort(compare)
  }
  return [];
}

class App extends Component {
  render() {
    const combinedMessages = getCombinedMessageData(this.props.messages, this.props.members)
    return (
      <div>
        <h1>Messages</h1>
        <MessageList messages={combinedMessages} />
      </div>
    );
  }
  componentDidMount() {
    store.dispatch(getChatLog());
    store.dispatch(getMemberList());
  }
}


const mapStateToProps = (state = {}) => {
  return { messages: state.messages, members: state.members }
};

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog, getMemberList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
