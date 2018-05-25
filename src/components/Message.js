import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './message.css';

const DATE_FORMAT = 'ddd, Do MMMM YYYY, h:mmA';

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp)
  return moment(date).format(DATE_FORMAT);
}

const MessageComponent = (props) => {
  return (
    <div className='message'>
      <div className='message-text'>
        <div className='tooltip'>{props.message}
          <div className='tooltiptext'>{props.email}</div>
        </div>
        <p>{formatTimestamp(props.time)}</p>
      </div>
      <div className='message-avatar'>
        <img src={props.avatar} alt={'missing avatar'}/>
      </div>
    </div>
  );
};

MessageComponent.propTypes = {
  message: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  time: PropTypes.string,
};

export default MessageComponent;
