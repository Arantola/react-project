import classes from './CardList.module.css';

import { PokemonCard } from '../../services/apiTypes';
import Card from '../Card/Card';
import Spinner from '../UI/Spinner/Spinner';
import { useFetchDataQuery } from '../../services/apiService';
import useCurrentSearchParams from '../../hooks/useSearchParams';
// import Paginator from '../UI/Paginator/Paginator';

function CardList() {
  const { getSearchParams } = useCurrentSearchParams();
  const { data, error, isLoading, isFetching, isSuccess } = useFetchDataQuery(
    getSearchParams()
  );

  const cards = data?.data;
  const isCardsExist = cards != null && cards.length > 0;

  // const isPaginateNecessary: boolean | undefined =
  //   data && data?.totalCount > data?.pageSize;

  return (
    <div className={classes.list}>
      {(isLoading || isFetching) && <Spinner />}
      {error && <h2>Something went wrong</h2>}
      {!isLoading && !isCardsExist && <span>No data</span>}
      {isSuccess && isCardsExist && (!isLoading || !isFetching) && (
        <>
          <ul>
            {cards!.map((item: PokemonCard) => (
              <Card key={item.id} item={item} />
            ))}
          </ul>
          {/* {isPaginateNecessary && isSuccess && <Paginator />} */}
        </>
      )}
    </div>
  );
}

export default CardList;
