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
          imageUrl="https://static01.nyt.com/images/2021/09/22/opinion/sunday/22FlagsStills-02/22FlagsStills-02-videoSixteenByNineJumbo1600-v2.jpg"
        />
      </List>
    </StyledCountry>
  );
}

export default Country;
