import { PureComponent } from 'react';
import { ErrorHandler } from '../types/interfaces';
import classes from './Error.module.css';

class Error extends PureComponent<ErrorHandler> {
  removeError = () => {
    this.props.onErrorChange(false);
  };

  render = () => {
    return (
      <div className={classes.modal}>
        <h1>Seems we have an error!</h1>
        <button type="button" onClick={this.removeError}>
          REMOVE ERROR
        </button>
      </div>
    );
  };
}

export default Error;
