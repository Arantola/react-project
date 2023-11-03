import React, { Component, RefObject } from 'react';

import classes from './Searcher.module.css';
import ItemList from './ItemList';
import { ErrorHandler } from '../types/interfaces';

type SearcherState = { inputValue: string };

class Searcher extends Component<ErrorHandler, SearcherState> {
  inputRef: RefObject<HTMLInputElement>;

  constructor(props: ErrorHandler) {
    super(props);
    this.state = { inputValue: '' };
    this.inputRef = React.createRef();
  }

  componentDidMount = () => {
    const storedInputValue = localStorage.getItem('inputValue');
    if (storedInputValue && this.inputRef.current) {
      this.inputRef.current.value = storedInputValue;
    }
  };

  static handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trimStart();
    localStorage.setItem('inputValue', value);
  };

  handleSearchClick = () => {
    const { inputValue } = this.state;
    if (this.inputRef.current) {
      const currentInputValue = this.inputRef.current.value.trim();
      if (currentInputValue !== inputValue) {
        this.setState({ inputValue: currentInputValue });
        localStorage.setItem('inputValue', currentInputValue);
      }
    }
  };

  handleErrorClick = () => {
    const { onErrorChange } = this.props;
    try {
      throw new Error('Custom error from Searcher component');
    } catch (error) {
      onErrorChange(true);
    }
  };

  render = () => {
    const { inputValue } = this.state;
    return (
      <>
        <div className={classes.searcher}>
          <div>
            <input
              type="search"
              ref={this.inputRef}
              onChange={Searcher.handleInputChange}
            />
            <button type="button" onClick={this.handleSearchClick}>
              Search
            </button>
          </div>
          <button type="button" onClick={this.handleErrorClick}>
            Throw error
          </button>
        </div>
        <ItemList searchTerm={inputValue} />
      </>
    );
  };
}

export default Searcher;
