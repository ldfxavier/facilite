import React from 'react';
import {
  Wrapper, Left, Right, Box, Logo, SocialMedia, Container, BigDivider, ForgotPassword, Btn1, Btn2,
} from './styles';
import {
  ColoredLogoIcon, FacebookIcon, WhatsappIcon, DunnoIcon,
} from '../../config/svgs';
import Input from '../../components/Input';

import Divider from '../../components/Divider';

const Login = () => (
  <Wrapper>
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
          <a href="/"><h5>Esqueci minha senha</h5></a>
        </ForgotPassword>
        <BigDivider />
        <Btn1><h5>Fazer login</h5></Btn1>
        <BigDivider />
        <Btn2><h5>Conhecer planos</h5></Btn2>
      </Container>
    </Left>
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

export default Login;
