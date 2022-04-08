import React from 'react';

const Button = ({onClick, text, value}) => {
  return (
      <button onClick={onClick} value = {value}>{text.toUpperCase()}</button>
  )
};

export default Button;
