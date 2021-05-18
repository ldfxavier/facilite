/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSpring, animated } from 'react-spring';
import {
  PasswordModal, CloseContainer, InfoContainer, Info, Btn1, BigDivider,
} from './styles';
import { PurpleCloseIcon, AirplaneIcon } from '../../config/svgs';
import Input from '../../components/Input';
import Divider from '../../components/Divider';

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
        <CloseContainer>
          <button onClick={() => setShowPassword(!showPassword)}>
            <img src={PurpleCloseIcon} alt="close-icon" />
          </button>
        </CloseContainer>
        <InfoContainer>
          <Info>
            <img src={AirplaneIcon} alt="airplane-icon" />
            <BigDivider />
            <Divider />
            <h3>Recuperar senha</h3>
            <Divider />
            <Divider />
            <div className="enter-email">
              <h5>Digite seu e-mail cadastrado para receber o passo a passo de recuperação</h5>
            </div>
            <Divider />
            <Divider />
            <Input placeholder="prestador@prestador.com" />
            <BigDivider />
            <Divider />
            <Btn1><h5>Enviar e-mail</h5></Btn1>
          </Info>
        </InfoContainer>
      </PasswordModal>
    </animated.div>
  );
};

export default Password;
