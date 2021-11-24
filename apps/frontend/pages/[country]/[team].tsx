import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { Header, Count } from '@futbol-pro/ui';
import { Player } from '@futbol-pro/types';
import { getPlayers } from '@futbol-pro/services';
import Card from '../../components/card/card';
import List from '../../components/list/list';

/* eslint-disable-next-line */
export interface TeamProps {}

const StyledTeam = styled.div``;

export function Team(props: TeamProps) {
  const router = useRouter();
  const { team } = router.query;

  const [players, setPlayers] = useState([] as Array<Player>);

  useEffect(() => {
    getPlayers(Number(team)).then((data) => {
      const playersParsed = data.response.map((playerRaw) => {
        return {
          id: playerRaw.player.id,
          name: playerRaw.player.name,
          photo: playerRaw.player.photo,
        };
      });
      setPlayers(playersParsed);
    });
  }, []);

  return (
    <StyledTeam>
      <Header text="Viendo jugadores del equipo" />
      <Count current={players.length} />
      <List>
        {players.map((player) => (
          <Card
            key={`player-${player.id}`}
            href="#"
            text={player.name}
            imageUrl={player.photo}
          />
        ))}
      </List>
    </StyledTeam>
  );
}

export default Team;
