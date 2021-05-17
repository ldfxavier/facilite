import styled from 'styled-components';

const InputStyle = styled.input`
  width: 413px;
  border: 0;
  height: 51px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0.5px 2px 6px ${(props) => props.theme.colors.cinza5};
  padding-left: 25px;

  ::placeholder, ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.cinza3};
    font-size: 16px;
  }
`;

export default InputStyle;
