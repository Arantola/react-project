import classes from './Searcher.module.css';

import Button from '../UI/Button/Button';
import Dropdown from '../UI/Dropdown/Dropdown';
import SearchBar from '../UI/SearchBar/SearchBar';

export interface SearchDataProps {
  searchValue: string;
  isLoading: boolean;
  pageSize: string | null;
  handleUpdateSearchValue: (value: string) => void;
  handleSendSearchValue: () => void;
  handleUpdateItemsOnPage: (value: string) => void;
}

function Searcher({
  searchValue,
  isLoading,
  pageSize,
  handleUpdateSearchValue,
  handleSendSearchValue,
  handleUpdateItemsOnPage,
}: SearchDataProps) {
  return (
    <header className={classes.searcher}>
      <SearchBar
        value={searchValue || ''}
        placeholder="Enter character name"
        onChange={(newValue) => handleUpdateSearchValue(newValue)}
      />
      <Button
        className={classes.button}
        onClick={handleSendSearchValue}
        disabled={isLoading}
      >
        Search
      </Button>
      <Dropdown
        handleUpdateItemsOnPage={handleUpdateItemsOnPage}
        pageSize={pageSize}
      />
    </header>
  );
}

export default Searcher;
