import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { Header, Count } from '@futbol-pro/ui';
import Card from '../../components/card/card';
import List from '../../components/list/list';

/* eslint-disable-next-line */
export interface CountryProps {}

const StyledCountry = styled.div``;

export function Country(props: CountryProps) {
  const router = useRouter();
  const { country } = router.query;

  return (
    <StyledCountry>
      <Header text={`Equipos en ${country}`} />
      <Count current={0} />
      <List>
        <Card
          href="/country/abcd34"
          text="Equipo Random"
          imageUrl="https://media.api-football.com/flags/ad.svg"
        />
      </List>
    </StyledCountry>
  );
}

export default Country;
