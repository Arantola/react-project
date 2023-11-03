import classes from './Main.module.css';

import { ErrorHandler } from '../types/interfaces';
import ItemList from '../components/ItemList';
import Searcher from '../components/Searcher';
import Paginator from '../components/Paginator';

function Main(props: ErrorHandler) {
  const handleErrorClick = () => {
    const { onErrorChange } = props;
    try {
      throw new Error('Custom error from Searcher component');
    } catch (error) {
      onErrorChange(true);
    }
  };

  return (
    <div className={classes.main}>
      <Searcher />
      <button type="button" onClick={handleErrorClick}>
        Throw error
      </button>
      <ItemList />
      <Paginator hasNextPage hasPrevPage />
    </div>
  );
}

export default Main;
