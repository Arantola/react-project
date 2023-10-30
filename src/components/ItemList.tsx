import { Component } from 'react';
import { MockItem } from '../types/interfaces';
import classes from './ItemList.module.css';
import Item from './Item';

const DUMMY_ITEMS: MockItem[] = [
  { id: '1', name: 'FooBoo' },
  { id: '2', name: 'Foo' },
  { id: '3', name: 'Boo' },
];

class ItemList extends Component<
  { searchTerm: string },
  { filteredItems: MockItem[] }
> {
  constructor(props: { searchTerm: string }) {
    super(props);

    this.state = {
      filteredItems: [],
    };
  }

  componentDidMount() {
    // send http request
    // this.setState({ filteredItems: responce })
    this.setState({
      filteredItems: DUMMY_ITEMS,
    });
  }

  componentDidUpdate(prevProps: { searchTerm: string }) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.setState({
        filteredItems: DUMMY_ITEMS.filter((item) =>
          item.name.includes(this.props.searchTerm)
        ),
      });
    }
  }

  render = () => {
    return (
      <div className={classes.list}>
        <ul>
          {this.state.filteredItems.map((item) => (
            <Item key={item.id} id={item.id} name={item.name} />
          ))}
        </ul>
      </div>
    );
  };
}

export default ItemList;
