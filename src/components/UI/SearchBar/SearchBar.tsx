import { ChangeEvent } from 'react';
import classes from './SearchBar.module.css';

export interface SearchBarProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, placeholder, onChange }: SearchBarProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <div className={classes.input}>
      <input
        type="input"
        placeholder={placeholder}
        name="search-bar"
        id="search-bar"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
