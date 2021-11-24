import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { Header, Count } from '@futbol-pro/ui';
import { Team } from '@futbol-pro/types';
import Card from '../../components/card/card';
import List from '../../components/list/list';
import { getTeams } from '@futbol-pro/services';

/* eslint-disable-next-line */
export interface CountryProps {}

const StyledCountry = styled.div``;

export function Country(props: CountryProps) {
  const router = useRouter();
  const { country } = router.query;

  const [teams, setTeams] = useState([] as Array<Team>);

  useEffect(() => {
    if (!country) return;
    getTeams(country).then((data) => {
      const teamsParsed: Array<Team> = data.response.map((teamRaw) => {
        return {
          id: teamRaw.team.id,
          name: teamRaw.team.name,
          logo: teamRaw.team.logo,
        };
      });
      setTeams(teamsParsed);
    });
  }, [country]);

  return (
    <StyledCountry>
      <Header text={`Equipos en ${country}`} />
      <Count current={teams.length} />
      <List>
        {teams.map((team) => (
          <Card
            key={`team-${team.id}`}
            href={`/${country}/${team.id}`}
            text={team.name}
            imageUrl={team.logo}
            mode="team"
          />
        ))}
      </List>
    </StyledCountry>
  );
}

export default Country;
