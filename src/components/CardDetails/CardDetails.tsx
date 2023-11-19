import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './CardDetails.module.css';

import { useFetchDataWithIDQuery } from '../../services/apiService';
import Spinner from '../UI/Spinner/Spinner';
import Button from '../UI/Button/Button';

export interface LoadedData {
  data: {
    name: string;
    hp: string;
    rarity: string;
    types: string[];
    flavorText: string;
  };
}

function Details() {
  const { id } = useParams();
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);

  const { data, error, isLoading, isFetching, isSuccess } =
    useFetchDataWithIDQuery(id);

  const currentURL = new URL(window.location.href);
  useEffect(() => {
    if (id && currentURL.pathname.includes(id)) {
      setIsDetailsOpen(true);
    }
  }, [id, currentURL.pathname]);

  if (!data) {
    return (
      <section className={classes.card}>
        {error && <h2>Something went wrong</h2>}
        {(isLoading || isFetching) && <Spinner />}
      </section>
    );
  }

  const { name, hp, rarity, types, flavorText } = data.data || {};

  const handleCloseSideMenu = () => {
    currentURL.pathname = '';
    window.history.pushState(null, '', currentURL.toString());
    setIsDetailsOpen(false);
  };
  if (!isDetailsOpen) return null;

  return (
    <section className={classes.card}>
      {error && <h2>Something went wrong</h2>}
      {(isLoading || isFetching) && <Spinner />}
      {isSuccess && (
        <>
          <div className={classes.info}>
            <p>Name: {name}</p>
            <p>HP: {hp}</p>
            <p>Rarity: {rarity}</p>
            <p>Type: {types && types.length > 0 ? types[0] : 'N/A'}</p>
            <p>Description: {flavorText}</p>
          </div>
          <Button onClick={handleCloseSideMenu}>Close Card</Button>
        </>
      )}
    </section>
  );
}

export default Details;
