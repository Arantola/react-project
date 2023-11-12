import classes from './CardList.module.css';

import { PokemonCard } from '../../services/apiTypes';
import Card from '../Card/Card';
import Spinner from '../UI/Spinner/Spinner';
import { useAppContext } from '../../context/appContext';

function CardList() {
  const { data, isLoading } = useAppContext()!;
  const cards = data?.data;
  const isCardsExist = cards != null && cards.length > 0;
  return (
    <div className={classes.list}>
      {isLoading && <Spinner />}
      {!isLoading && !isCardsExist && <span>No data</span>}
      {!isLoading && isCardsExist && (
        <ul>
          {cards?.map((item: PokemonCard) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default CardList;
