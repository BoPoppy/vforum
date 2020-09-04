import React from 'react';
import './style.css';

function errorMessage(props) {
  return <div className='error-message'>{props.text}</div>;
}

export default errorMessage;
