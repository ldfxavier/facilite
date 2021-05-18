import React from 'react';
import { PigIcon2 } from '../../../config/svgs';
import {
  Container, Btn, BigDivider, SmallBox, Title, Box,
} from './styles';
import Divider from '../../../components/Divider';

const Semiannual = () => (
  <Container>
    <Title>SEMESTRAL</Title>
    <Box>
      <h4>O melhor custo benefício da categoria</h4>
    </Box>
    <h4 className="from">De: R$ 38,90</h4>
    <Divider />
    <Divider />
    <img src={PigIcon2} alt="pig-icon" />
    <BigDivider />
    <div className="to">
      <h5>por:</h5>
      <h4>29,90</h4>
      <h5>/mês</h5>
    </div>
    <SmallBox>
      <h5 className="obs">Cobrado anualmente no boleto ou em 12x no cartão de crédito</h5>
    </SmallBox>
    <Btn><h5 className="btn-info">Assinar</h5></Btn>
  </Container>
);

export default Semiannual;
