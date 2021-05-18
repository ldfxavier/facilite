import styled from 'styled-components';
import Button from '../../../components/Button';

export const PasswordModal = styled.div`
  position: absolute;
  background-color: #fff;
  width: calc(50vw - 10px);
  height: 100%;
  z-index: 4;
`;

export const CloseContainer = styled.div`
  text-align: right;

  button {
    background-color: #fff;
    border: 0;
    cursor: pointer;
  }
  
  img {
    padding-right: 20px;
    padding-top: 20px;
  }

`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 65px);

  h3, h5 {
    color: ${(props) => props.theme.colors.cinza5}
  }

  h5 {
    font-weight: normal;
  }
`;

export const Info = styled.div`
  max-width: 500px;
  text-align: center;

  .enter-email {
    width: 320px; 
    margin: 0 auto;
  }

  .enter-email h5 {
    padding: 0;
    margin: 0;
  }
`;

export const Btn1 = styled(Button)`
  background-color: ${(props) => props.theme.colors.roxoEscuro};
  border: 0;

  h5 {
    color: #fff;
    margin: 0;
    padding: 0;
  }
`;

export const BigDivider = styled.div`
  height: 80px;
`;
