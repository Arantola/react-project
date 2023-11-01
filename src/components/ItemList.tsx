import { useCallback, useEffect, useState } from 'react';
import { MockItem } from '../types/interfaces';
import classes from './ItemList.module.css';
import Item from './Item';
import fetchData from '../utils/api';

type ItemListProps = { searchTerm: string };

const ItemList = (props: ItemListProps) => {
  const { searchTerm } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [items, setItems] = useState<MockItem[]>([]);

  const fetchItemsHandler = useCallback(async (search = '') => {
    setIsLoading(true);

    const responseData = await fetchData(search);
    setItems(responseData);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchItemsHandler(searchTerm);
  }, [fetchItemsHandler, searchTerm]);

  return (
    <div className={classes.list}>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
