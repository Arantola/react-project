import classes from './Item.module.css';
import { MockItem } from '../types/interfaces';

function Item(props: { item: MockItem }) {
  const { item } = props;
  const { name, image, description } = item;

  return (
    <li className={classes.item}>
      <img src={image} alt={name} />
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </li>
  );
}

export default Item;
