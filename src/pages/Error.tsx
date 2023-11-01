import { memo } from 'react';
import { ErrorHandler } from '../types/interfaces';
import classes from './Error.module.css';

const Error = memo((props: ErrorHandler) => {
  const removeError = () => {
    props.onErrorChange(false);
  };

  return (
    <div className={classes.modal}>
      <h1>Seems we have an error!</h1>
      <button type="button" onClick={removeError}>
        REMOVE ERROR
      </button>
    </div>
  );
});

export default Error;
