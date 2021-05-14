import React from 'react';
import {
  Wrapper, Left, Right, Box, Logo, SocialMedia,
} from './styles';
import {
  ColoredLogoIcon, FacebookIcon, WhatsappIcon, DunnoIcon,
} from '../../config/svgs';

const Login = () => (
  <Wrapper>
    <Left />
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
