import { memo } from 'react';
import classes from './Error.module.css';

const Error = memo(() => (
  <div className={classes.modal}>
    <h1>Seems we have an error!</h1>
  </div>
));

export default Error;
