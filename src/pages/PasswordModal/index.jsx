/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSpring, animated } from 'react-spring';
import PasswordModal from './styles';

const Password = ({ showPassword, setShowPassword }) => {
  const animation = useSpring({
    opacity: 1,
    delay: 300,
    reset: showPassword,
    transform: 'translateX(0px)',
    from: {
      opacity: 0,
      transform: 'translateX(-50vw)',
    },
  });

  return (
    <animated.div style={animation}>
      <PasswordModal>
        <h5>ola</h5>
        <button onClick={() => setShowPassword(!showPassword)}>click me</button>
      </PasswordModal>
    </animated.div>
  );
};

export default Password;
