import { ChangeEvent, useEffect, useRef } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import classes from './Searcher.module.css';

function Searcher() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { search, pathname } = location;

  useEffect(() => {
    const storedInputValue = localStorage.getItem('inputValue');
    if (storedInputValue && inputRef.current) {
      inputRef.current.value = storedInputValue;
    }
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trimStart();
    localStorage.setItem('inputValue', value);
    // TODO change logic here
  };

  const handleSearchClick = () => {
    if (inputRef.current) {
      const currentInputValue = inputRef.current.value.trim();

      const queryParams = new URLSearchParams(search);
      const querySearchValue = queryParams.get('search');

      if (currentInputValue !== querySearchValue) {
        localStorage.setItem('inputValue', currentInputValue);
        queryParams.set('search', currentInputValue);
        navigate({
          pathname,
          search: `?${queryParams.toString()}`,
        });
      }
    }
  };

  return (
    <div className={classes.searcher}>
      <div>
        <input
          type="search"
          ref={inputRef}
          onChange={handleInputChange}
          // onKeyDown={handleSearchClick} TODO add handler for enter key
        />
        <button type="button" onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Searcher;
