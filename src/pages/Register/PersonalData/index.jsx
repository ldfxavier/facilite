/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSpring, animated } from 'react-spring';
import {
  PasswordModal, InfoContainer, Info, Btn1, BigDivider,
} from './styles';
import Input from '../../../components/Input';
import Divider from '../../../components/Divider';

const PersonalData = ({ showPersonal, setShowPersonal }) => {
  const animation = useSpring({
    opacity: 1,
    delay: 200,
    reset: showPersonal,
    transform: 'translateX(0px)',
    from: {
      opacity: 0,
      transform: 'translateX(-50vw)',
    },
  });

  return (
    <animated.div style={animation}>
      <PasswordModal>
        <InfoContainer>
          <Info>
            <p>ola</p>
          </Info>
        </InfoContainer>
      </PasswordModal>
    </animated.div>
  );
};

export default PersonalData;
