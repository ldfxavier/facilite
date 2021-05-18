/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Annual from './Annual';
import Semiannual from './Semiannual';
import Quarterly from './Quarterly';
import Monthly from './Monthly';
import PersonalData from '../Register/PersonalData';
import Divider from '../../components/Divider';
import {
  PlanModal, InfoContainer, Info, Elip1, Elip2, Options, Btn1, Btn2,
} from './styles';

const Plans = ({ showPlans }) => {
  const [plan, setPlan] = useState(1);
  const [showPersonal, setShowPersonal] = useState(false);

  const animation = useSpring({
    opacity: 1,
    delay: 200,
    reset: showPlans,
    transform: 'translateX(0px)',
    from: {
      opacity: 0,
      transform: 'translateX(-50vw)',
    },
  });

  return (
    <>
      <animated.div style={animation}>
        <PlanModal>
          <InfoContainer>
            <Info>
              {plan === 1 && <Annual /> }
              {plan === 2 && <Semiannual />}
              {plan === 3 && <Quarterly />}
              {plan === 4 && <Monthly />}
              {plan === 2
                ? <Btn2 onClick={() => setShowPersonal(!showPersonal)}><h5 className="btn-info">Assinar</h5></Btn2>
                : <Btn1 onClick={() => setShowPersonal(!showPersonal)}><h5 className="btn-info">Assinar</h5></Btn1>}
              <Divider />
              <Divider />
              <Options>
                {plan === 1
                  ? <Elip2 onClick={() => setPlan(1)} />
                  : <Elip1 onClick={() => setPlan(1)} /> }
                {plan === 2
                  ? <Elip2 onClick={() => setPlan(2)} />
                  : <Elip1 onClick={() => setPlan(2)} /> }
                {plan === 3
                  ? <Elip2 onClick={() => setPlan(3)} />
                  : <Elip1 onClick={() => setPlan(3)} /> }
                {plan === 4
                  ? <Elip2 onClick={() => setPlan(4)} />
                  : <Elip1 onClick={() => setPlan(4)} /> }
              </Options>
            </Info>
          </InfoContainer>
        </PlanModal>
      </animated.div>
      {showPersonal
        && <PersonalData showPersonal={showPersonal} setShowPersonal={setShowPersonal} /> }
    </>
  );
};

export default Plans;
