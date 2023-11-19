import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <h1>404. Page not found</h1>
      <Link to="/">Go to homepage</Link>
    </div>
  );
}

export default Error;
