import styled from '@emotion/styled';

import { StyledP, Creditos } from '../../components/styled/styled';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function About() {
  return (
    <StyledAbout>
      <StyledP>
        FutbolPRO es una página que te permite buscar la mayoría de equipos y
        jugadores de fútbol del mundo. Echa un vistazo y no te arrepentirás.
      </StyledP>
      <Creditos>Hecho por Jesús Imitola, Jesús Reyes y Diego Cavadia</Creditos>
    </StyledAbout>
  );
}

export default About;
