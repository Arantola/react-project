import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MockItem } from '../types/interfaces';
import classes from './ItemList.module.css';
import Item from './Item';
import fetchData from '../utils/api';

function ItemList() {
  const location = useLocation();
  const { search } = location;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [items, setItems] = useState<MockItem[]>([]);
  const isItems = Boolean(items.length);

  const fetchItemsHandler = useCallback(async () => {
    const queryParams = new URLSearchParams(search);
    const queryPage = queryParams.get('page') || '1';
    const queryLimit = queryParams.get('limit') || '10';
    const querySearch = queryParams.get('search') || '';

    setIsLoading(true);

    const responseData = await fetchData(querySearch, queryPage, queryLimit);
    setItems(responseData);

    setIsLoading(false);
  }, [search]);

  useEffect(() => {
    fetchItemsHandler();
  }, [fetchItemsHandler]);

  // TODO Simplify checks
  return (
    <div className={classes.list}>
      {isLoading && <span>Loading...</span>}
      {!isLoading && !isItems && <span>No data</span>}
      {!isLoading && isItems && (
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;
