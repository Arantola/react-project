import classes from './CardList.module.css';

import { PokemonCard } from '../../services/apiTypes';
import Card from '../Card/Card';
import Spinner from '../UI/Spinner/Spinner';

export interface CardListProps {
  data: PokemonCard[] | null;
  isLoading: boolean;
}

function CardList({ data, isLoading }: CardListProps) {
  return (
    <div className={classes.list}>
      {isLoading && <Spinner />}
      {!isLoading && data?.length === 0 && <span>No data</span>}
      {!isLoading && data?.length && (
        <ul>
          {data?.map((item: PokemonCard) => <Card key={item.id} item={item} />)}
        </ul>
      )}
    </div>
  );
}

export default CardList;
