import classes from './Searcher.module.css';

import Button from '../UI/Button/Button';
import Dropdown from '../UI/Dropdown/Dropdown';
import SearchBar from '../UI/SearchBar/SearchBar';
import { useAppContext } from '../../context/appContext';

export interface SearchDataProps {
  pageSize: string | null;
  handleUpdateSearchValue: (value: string) => void;
  handleSendSearchValue: () => void;
  handleUpdateItemsOnPage: (value: string) => void;
}

function Searcher({
  pageSize,
  handleUpdateSearchValue,
  handleSendSearchValue,
  handleUpdateItemsOnPage,
}: SearchDataProps) {
  const { searchValue, isLoading } = useAppContext()!;
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
