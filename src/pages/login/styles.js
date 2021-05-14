import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid pink;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 100%;
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
