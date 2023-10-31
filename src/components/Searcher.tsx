import React, { Component, RefObject } from 'react';

import classes from './Searcher.module.css';
import ItemList from './ItemList';
import { ErrorHandler } from '../types/interfaces';

type SearcherState = { inputValue: string };

class Searcher extends Component<ErrorHandler, SearcherState> {
  inputRef: RefObject<HTMLInputElement>;
  constructor(props: ErrorHandler) {
    super(props);

    this.state = {
      inputValue: '',
    };
    this.inputRef = React.createRef();
  }

  componentDidMount = () => {
    const storedInputValue = localStorage.getItem('inputValue');
    if (storedInputValue && this.inputRef.current) {
      this.inputRef.current.value = storedInputValue;
    }
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.trimStart();
  };

  handleSearchClick = () => {
    if (this.inputRef.current) {
      const currentInputValue = this.inputRef.current.value.trim();
      if (currentInputValue !== this.state.inputValue) {
        this.setState({ inputValue: currentInputValue });
        localStorage.setItem('inputValue', currentInputValue);
      }
    }
  };

  handleErrorClick = () => {
    try {
      throw new Error('Custom error from Searcher component');
    } catch (error) {
      console.error(error);
      this.props.onErrorChange(true);
    }
  };

  render = () => {
    return (
      <>
        <div className={classes.searcher}>
          <div>
            <input
              type="search"
              ref={this.inputRef}
              onChange={this.handleInputChange}
            />
            <button type="button" onClick={this.handleSearchClick}>
              Search
            </button>
          </div>
          <button type="button" onClick={this.handleErrorClick}>
            Throw error
          </button>
        </div>
        <ItemList searchTerm={this.state.inputValue} />
      </>
    );
  };
}

export default Searcher;
