import { useState } from 'react';

import classes from './Searcher.module.css';

import Button from '../UI/Button/Button';
import Dropdown from '../UI/Dropdown/Dropdown';
import SearchBar from '../UI/SearchBar/SearchBar';

import { useFetchDataQuery } from '../../services/apiService';
import useCurrentSearchParams from '../../hooks/useSearchParams';

function Searcher() {
  const [searchTerm, setSearchTerm] = useState('');

  const { getSearchParams, setSearchParams } = useCurrentSearchParams();
  const { isLoading, isFetching } = useFetchDataQuery(getSearchParams());

  const handleSendSearchValue = async (): Promise<void> => {
    setSearchParams({ name: searchTerm });
  };

  return (
    <header className={classes.searcher}>
      <SearchBar
        value={searchTerm || ''}
        placeholder="Enter character name"
        onChange={(newValue) => setSearchTerm(newValue)}
      />
      <Button
        className={classes.button}
        onClick={handleSendSearchValue}
        disabled={isLoading || isFetching}
      >
        Search
      </Button>
      <Dropdown />
    </header>
  );
}

export default Searcher;
