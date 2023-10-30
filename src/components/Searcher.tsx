import { ChangeEvent, Component, Fragment } from 'react';

import classes from './Searcher.module.css';
import ItemList from './ItemList';

class Searcher extends Component<{ query: string }, { inputValue: string }> {
  constructor(props: { query: string }) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  trowError = () => {};

  render = () => {
    return (
      <Fragment>
        <div className={classes.searcher}>
          <input type="search" onChange={this.handleChange} />
          <button
            type="button"
            onClick={this.trowError}
            className={classes.error_button}
          >
            Trow error
          </button>
        </div>
        <ItemList searchTerm={this.state.inputValue} />
      </Fragment>
    );
  };
}

export default Searcher;
