import styled from '@emotion/styled';

import { Header, Count } from '@futbol-pro/ui';
import Card from '../components/card/card';
import List from '../components/list/list';

import { useAppContext } from '../components/country-context/country-context';

const StyledPage = styled.div``;

export function Index() {
  const countries = useAppContext();
  const countriesNumber = countries.length;

  return (
    <StyledPage>
      <Header text="Explorador de países" />
      <Count current={countriesNumber} />
      <List>
        {countries.map((country) => {
          return (
            <Card
              key={`${country.code}-${country.name}`}
              text={country.name}
              imageUrl={country.flag}
              href={`/${country.name}`}
              mode="flag"
            />
          );
        })}
      </List>
    </StyledPage>
  );
}

export default Index;
