import styled from 'styled-components';

export const PlanModal = styled.div`
  position: absolute;
  background-color: #fff;
  width: calc(50vw - 10px);
  height: 100%;
  z-index: 2;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Info = styled.div`
  max-width: 500px;
  text-align: center;
`;

export const BigDivider = styled.div`
  height: 80px;
`;

export const Options = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Elip1 = styled.div`
  background-color: ${(props) => props.theme.colors.cinza3};
  width: 15px;
  height: 15px;
  border-radius: 15px;
  cursor: pointer;
`;

export const Elip2 = styled.div`
  background-color: ${(props) => props.theme.colors.laranjaIntermediario};
  width: 18px;
  height: 18px;
  border-radius: 18px;
  cursor: pointer;
`;
