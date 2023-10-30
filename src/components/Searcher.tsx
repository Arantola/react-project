import { ChangeEvent, Component, Fragment } from 'react';

import classes from './Searcher.module.css';
import ItemList from './ItemList';

class Searcher extends Component<object, { inputValue: string }> {
  constructor() {
    super({});

    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  throwError = () => {};

  render = () => {
    return (
      <Fragment>
        <div className={classes.searcher}>
          <input type="search" onChange={this.handleChange} />
          <button
            type="button"
            onClick={this.throwError}
            className={classes.error_button}
          >
            Throw error
          </button>
        </div>
        <ItemList searchTerm={this.state.inputValue} />
      </Fragment>
    );
  };
}

export default Searcher;
