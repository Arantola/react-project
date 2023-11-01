import { Component } from 'react';
import { MockItem } from '../types/interfaces';
import classes from './ItemList.module.css';
import Item from './Item';
import getData from '../utils/api';

type ItemListProps = { searchTerm: string };
type ItemListState = {
  isLoading: boolean;
  items: MockItem[];
  filteredItems: MockItem[];
};

class ItemList extends Component<ItemListProps, ItemListState> {
  constructor(props: ItemListProps) {
    super(props);

    this.state = {
      isLoading: true,
      items: [],
      filteredItems: [],
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  componentDidUpdate = (prevProps: ItemListProps) => {
    const { searchTerm } = this.props;
    const { items } = this.state;

    if (prevProps.searchTerm !== searchTerm) {
      this.setState({ isLoading: true });
      this.setState({
        filteredItems: items.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      });
      this.setState({ isLoading: false });
    }
  };

  getData = async () => {
    try {
      const items = await getData();
      this.setState({ items, filteredItems: items, isLoading: false });
    } catch (error) {
      throw new Error('Fetch error!');
    }
  };

  render = () => {
    const { isLoading, filteredItems } = this.state;
    return (
      <div className={classes.list}>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <ul>
            {filteredItems.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </ul>
        )}
      </div>
    );
  };
}

export default ItemList;
