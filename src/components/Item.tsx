import { Component } from 'react';
import classes from './Item.module.css';

class Item extends Component<{ id: string; name: string }> {
  conponentWillUnmount() {
    console.log(`Item ${this.props.name} was unmount!`);
  }

  render() {
    return <li className={classes.item}>{this.props.name}</li>;
  }
}

export default Item;
