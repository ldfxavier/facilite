/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import {
  Wrapper, Left, Right, Box, Logo, SocialMedia, Container, BigDivider, ForgotPassword,
  Btn1, Btn2, BorderlessButton, DarkScreen,
} from './styles';
import {
  ColoredLogoIcon, FacebookIcon, WhatsappIcon, DunnoIcon,
} from '../../config/svgs';
import Password from '../PasswordModal';
import Input from '../../components/Input';

import Divider from '../../components/Divider';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const modalRef = useRef();

  return (
    <Wrapper>
      {showPassword && <Password showPassword={showPassword} setShowPassword={setShowPassword} />}
      <Left>
        <Container>
          <h3>Login</h3>
          <Divider />
          <h5>E-mail ou nome de usuário</h5>
          <Divider />
          <Input placeholder="prestador@prestador.com" />
          <BigDivider />
          <h5>Senha</h5>
          <Divider />
          <Input placeholder="***************" />
          <Divider />
          <Divider />
          <ForgotPassword>
            <BorderlessButton onClick={() => setShowPassword(!showPassword)}>
              <h5>Esqueci minha senha</h5>
            </BorderlessButton>
          </ForgotPassword>
          <BigDivider />
          <Btn1><h5>Fazer login</h5></Btn1>
          <BigDivider />
          <Btn2><h5>Conhecer planos</h5></Btn2>
        </Container>
      </Left>
      {showPassword && <DarkScreen onClick={() => setShowPassword(false)} />}
      <Right>
        <Box>
          <Logo src={ColoredLogoIcon} alt="logo" />
        </Box>
        <Box>
          <SocialMedia>
            <img src={FacebookIcon} alt="fb-icon" />
            <img src={WhatsappIcon} alt="wpp-icon" />
            <img src={DunnoIcon} alt="dunno-icon" />
          </SocialMedia>
        </Box>
      </Right>
    </Wrapper>
  );
};

export default Login;
