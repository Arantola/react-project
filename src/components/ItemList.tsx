import { Component } from 'react';
import { MockItem } from '../types/interfaces';
import classes from './ItemList.module.css';
import Item from './Item';
import getData from '../utils/api';

class ItemList extends Component<
  { searchTerm: string },
  { items: MockItem[]; filteredItems: MockItem[] }
> {
  constructor(props: { searchTerm: string }) {
    super(props);

    this.state = {
      items: [],
      filteredItems: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps: { searchTerm: string }) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.setState({
        filteredItems: this.state.items.filter((item) =>
          item.name.includes(this.props.searchTerm)
        ),
      });
    }
  }

  async getData() {
    try {
      const tasks = await getData();
      this.setState({ items: tasks, filteredItems: tasks });
    } catch (error) {
      throw new Error('Fetch error!');
    }
  }

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
