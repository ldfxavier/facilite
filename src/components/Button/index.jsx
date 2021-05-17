/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ButtonStyle from './styles';

const Button = (props) => (
  // eslint-disable-next-line react/destructuring-assignment
  // eslint-disable-next-line react/prop-types
  <ButtonStyle {...props}>{props.children}</ButtonStyle>
);

export default Button;
