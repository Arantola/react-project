import { Outlet } from 'react-router-dom';

import classes from './Catalog.module.css';

import Searcher from '../../components/Searcher/Searcher';
import CardList from '../../components/CardList/CardList';

function Catalog() {
  return (
    <div className={classes.catalog}>
      <Searcher />
      <div className={classes.content}>
        <section>
          <CardList />
        </section>
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default Catalog;
