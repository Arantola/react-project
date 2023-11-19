import { Link, useLocation } from 'react-router-dom';

import classes from './Card.module.css';

import { PokemonCard } from '../../services/apiTypes';

/* <Link to={`/card-details/${card.id}`}>View Details</Link> use this!!! */

function Card(props: { item: PokemonCard }) {
  const location = useLocation();
  const { item } = props;
  const {
    id,
    name,
    images: { small },
  } = item;

  return (
    <li className={classes.card}>
      <Link to={`${id}${location.search}`}>
        <img className={classes.img} id={id} src={small} alt={name} />
      </Link>
    </li>
  );
}

export default Card;
