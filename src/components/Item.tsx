import { Component } from 'react';
import classes from './Item.module.css';
import { MockItem } from '../types/interfaces';

class Item extends Component<{ item: MockItem }> {
  render = () => {
    const { item } = this.props;
    const { name, image, description } = item;

    return (
      <li className={classes.item}>
        <img src={image} alt="avatar" />
        <div>
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </li>
    );
  };
}

export default Item;
