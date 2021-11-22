import styled from '@emotion/styled';

import { StyledP } from './styled';

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
      <p>Hecho por Jesús Imitola, Jesús Reyes y Diego Cavadia</p>
    </StyledAbout>
  );
}

export default About;
