import React from 'react';
import PropTypes from 'prop-types';
import MessageComponent from "./Message"


const getMessageComponents = (messages) => {
  return messages ?
    messages.map(message =>
      <MessageComponent key={message.id} message={message.message}
                        email={message.email} avatar={message.avatar} time={message.timestamp}/>) : []
}

const MessageListComponent = (props) => {
  return (
    <div className="messageList">
      {getMessageComponents(props.messages)}
    </div>
  );
};

MessageListComponent.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      email: PropTypes.string,
      avatar: PropTypes.string,
      time: PropTypes.string
    })
  )
};



export default MessageListComponent;
