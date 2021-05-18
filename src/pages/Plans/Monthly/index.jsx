import React from 'react';
import { PigIcon4 } from '../../../config/svgs';
import {
  Container, BigDivider, SmallBox, Title, Box,
} from './styles';
import Divider from '../../../components/Divider';

const Monthly = () => (
  <Container>
    <Title>MENSAL</Title>
    <Box>
      <h4>Pra quem não quer se preocupar com renovação tão cedo</h4>
    </Box>
    <h4 className="from">De: R$ 59,90</h4>
    <Divider />
    <Divider />
    <img src={PigIcon4} alt="pig-icon" />
    <BigDivider />
    <div className="to">
      <h5>por:</h5>
      <h4>39,90</h4>
      <h5>/mês</h5>
    </div>
    <SmallBox>
      <h5 className="obs">Cobrado anualmente no boleto ou em 12x no cartão de crédito</h5>
    </SmallBox>
  </Container>
);

export default Monthly;
