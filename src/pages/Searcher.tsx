import { ChangeEvent, useEffect, useRef, useState } from 'react';

import classes from './Searcher.module.css';
import ItemList from '../components/ItemList';
import { ErrorHandler } from '../types/interfaces';

const Searcher = (props: ErrorHandler) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedInputValue = localStorage.getItem('inputValue');
    if (storedInputValue && inputRef.current) {
      inputRef.current.value = storedInputValue;
    }
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.trimStart();
  };

  const handleSearchClick = () => {
    if (inputRef.current) {
      const currentInputValue = inputRef.current.value.trim();
      if (currentInputValue !== inputValue) {
        setInputValue(currentInputValue);
        localStorage.setItem('inputValue', currentInputValue);
      }
    }
  };

  const handleErrorClick = () => {
    try {
      throw new Error('Custom error from Searcher component');
    } catch (error) {
      console.error(error);
      props.onErrorChange(true);
    }
  };

  return (
    <>
      <div className={classes.searcher}>
        <div>
          <input type="search" ref={inputRef} onChange={handleInputChange} />
          <button type="button" onClick={handleSearchClick}>
            Search
          </button>
        </div>
        <button type="button" onClick={handleErrorClick}>
          Throw error
        </button>
      </div>
      <ItemList searchTerm={inputValue} />
    </>
  );
};

export default Searcher;
