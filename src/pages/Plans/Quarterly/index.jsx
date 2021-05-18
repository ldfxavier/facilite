import React from 'react';
import { PigIcon3 } from '../../../config/svgs';
import {
  Container, BigDivider, SmallBox, Title, Box,
} from './styles';
import Divider from '../../../components/Divider';

const Quarterly = () => (
  <Container>
    <Title>TRIMESTRAL</Title>
    <Box>
      <h4>Pra quem quer conhecer a plataforma e não abre mão de um desconto</h4>
    </Box>
    <h4 className="from">De: R$ 45,90</h4>
    <Divider />
    <Divider />
    <img src={PigIcon3} alt="pig-icon" />
    <BigDivider />
    <div className="to">
      <h5>por:</h5>
      <h4>34,90</h4>
      <h5>/mês</h5>
    </div>
    <SmallBox>
      <h5 className="obs">Cobrado anualmente no boleto ou em 12x no cartão de crédito</h5>
    </SmallBox>
  </Container>
);

export default Quarterly;
