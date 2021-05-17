import styled from 'styled-components';
import Button from '../../components/Button';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid pink;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.cinza1};
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export const SocialMedia = styled.div`
  width: 283.63px;
  display: flex;
  justify-content: space-between;

  img {
    width: 62.11px;
    height: 62.11px;
  }
`;

export const Logo = styled.img`
  width: 283.63px;
  height: 164.39;
`;

export const Container = styled.div`
  width: 440px;

  h3, h5 {
    color: ${(props) => props.theme.colors.cinza5}
  }

  h5 {
    margin: 0;
    margin-left: 7px;
    font-weight: normal;
  }
`;

export const ForgotPassword = styled.div`
  width: 438px;
  text-align: right;

  a {
    text-decoration: none;
  }

  h5 {
    color: ${(props) => props.theme.colors.laranjaIntermediario};
    font-weight: bold;
  }
`;

export const Btn1 = styled(Button)`
  background-color: ${(props) => props.theme.colors.roxoEscuro};
  border: 0;

  h5 {
    color: #fff;
  }
`;

export const Btn2 = styled(Button)`
  background-color: #fff;
  border: 3px solid ${(props) => props.theme.colors.laranjaIntermediario};

  h5 {
    color: ${(props) => props.theme.colors.laranjaIntermediario};
  }
`;

export const BigDivider = styled.div`
  height: 80px;
`;
