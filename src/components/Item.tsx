import classes from './Item.module.css';

import { MockItem } from '../types/interfaces';

const Item = (props: { item: MockItem }) => {
  const { name, image, description } = props.item;

  return (
    <li className={classes.item}>
      <img src={image}></img>
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default Item;
