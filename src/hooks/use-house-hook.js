import {
  useEffect,
  useState,
} from 'react';

import housesData from '../main-page/houses.json';

const useHouses = () => {
  const [ allHouses, setHouses ] = useState( [] );

  useEffect( () => {
    setHouses( housesData );
  }, [] );

  return allHouses;

}

export default useHouses;
