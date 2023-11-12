import { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';

import classes from './CardDetails.module.css';

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
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const currentURL = new URL(window.location.href);
  const data = useLoaderData() as LoadedData;

  const { name, hp, rarity, types, flavorText } = data.data;

  const handleCloseSideMenu = () => {
    currentURL.pathname = '';
    window.history.pushState(null, '', currentURL.toString());
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (id && currentURL.pathname.includes(id)) {
      setIsMenuOpen(true);
    }
  }, [id, currentURL.pathname]);
  if (!isMenuOpen) return null;
  return (
    <section className={classes.card}>
      {navigation.state === 'loading' ? (
        <Spinner />
      ) : (
        <>
          <div className={classes.info}>
            <p>Name: {name}</p>
            <p>HP: {hp}</p>
            <p>Rarity: {rarity}</p>
            <p>Type: {types[0]}</p>
            <p>Description: {flavorText}</p>
          </div>
          <Button onClick={handleCloseSideMenu}>Close Card</Button>
        </>
      )}
    </section>
  );
}

export default Details;
