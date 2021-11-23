import axios from 'axios';

const URL: string = process.env.NX_RAPIDAPI_HOST || 'Fallo';
const KEY: string = process.env.NX_RAPIDAPI_KEY || 'Fallo';

const get = async (endpoint: string) => {
  const requestURL: string = `https://${URL}/${endpoint}`;
  const config = {
    headers: {
      'x-rapidapi-host': URL,
      'x-rapidapi-key': KEY,
    },
  };

  try {
    const res = await axios.get(requestURL, config);
    return res;
  } catch (error) {
    return error;
  }
};

const getCountries = async () => {
  const json: any = await get('countries');
  return json.data;
};

const getTeams = (country: string) => {};

const getPlayers = (teamId: number) => {};

export { getCountries, getTeams, getPlayers };
