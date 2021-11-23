import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

import { getCountries } from '@futbol-pro/services';
import { Country } from '@futbol-pro/types';

const AppContext = createContext({} as Array<Country>);

export function AppWrapper({ children }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data.response);
    });
  }, []);

  return (
    <AppContext.Provider value={countries}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
