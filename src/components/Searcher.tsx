import React, { Component, Fragment, RefObject } from 'react';

import classes from './Searcher.module.css';
import ItemList from './ItemList';

type SearcherState = { inputValue: string };

class Searcher extends Component<object, SearcherState> {
  inputRef: RefObject<HTMLInputElement>;
  constructor() {
    super({});

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

  handleErrorClick = () => {};

  render = () => {
    return (
      <Fragment>
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
      </Fragment>
    );
  };
}

export default Searcher;
