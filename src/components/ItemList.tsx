import { Component } from 'react';
import { MockItem } from '../types/interfaces';
import classes from './ItemList.module.css';
import Item from './Item';
import getData from '../utils/api';

type ItemListProps = { searchTerm: string };
type ItemListState = { items: MockItem[]; filteredItems: MockItem[] };

class ItemList extends Component<ItemListProps, ItemListState> {
  constructor(props: ItemListProps) {
    super(props);

    this.state = {
      items: [],
      filteredItems: [],
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  componentDidUpdate = (prevProps: ItemListProps) => {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.setState({
        filteredItems: this.state.items.filter((item) =>
          item.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())
        ),
      });
    }
  };

  getData = async () => {
    try {
      const items = await getData();
      this.setState({ items, filteredItems: items });
    } catch (error) {
      throw new Error('Fetch error!');
    }
  };

  render = () => {
    return (
      <div className={classes.list}>
        <ul>
          {this.state.filteredItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  };
}

export default ItemList;
