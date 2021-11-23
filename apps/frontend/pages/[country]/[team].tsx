import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { Header, Count } from '@futbol-pro/ui';
import Card from '../../components/card/card';
import List from '../../components/list/list';

/* eslint-disable-next-line */
export interface TeamProps {}

const StyledTeam = styled.div``;

export function Team(props: TeamProps) {
  const router = useRouter();
  const { country, team } = router.query;

  return (
    <StyledTeam>
      <Header text={`Jugadores en ${team}`} />
      <Count current={0} />
      <List>
        <Card
          href="/country/abcd34"
          text="El Bicho Siu+"
          imageUrl="https://static01.nyt.com/images/2021/09/22/opinion/sunday/22FlagsStills-02/22FlagsStills-02-videoSixteenByNineJumbo1600-v2.jpg"
        />
      </List>
    </StyledTeam>
  );
}

export default Team;
