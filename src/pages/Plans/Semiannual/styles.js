import styled from 'styled-components';

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.laranja};
`;

export const Box = styled.div`
  width: 300px;
  margin: 0 auto;
`;

export const Container = styled.div`
  h4, h5 {
    color: ${(props) => props.theme.colors.cinza5};
    font-weight: normal;
  }

  .from {
    color: ${(props) => props.theme.colors.laranja};
    text-decoration: line-through;
    text-decoration-color: ${(props) => props.theme.colors.laranjaClaro}
  }

  .obs {
    color: ${(props) => props.theme.colors.cinza4};
    margin-top: -10px;
  }

  .to {
    width: 140px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h4 {
      color: ${(props) => props.theme.colors.laranja};
    }
  }
`;

export const SmallBox = styled.div`
  width: 250px;
  margin: 0 auto;
`;

export const BigDivider = styled.div`
  height: 80px;
`;
