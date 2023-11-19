import classes from './Dropdown.module.css';

import useCurrentSearchParams from '../../../hooks/useSearchParams';

export default function Dropdown() {
  const selectOptions = ['5', '10', '15', '20'];
  const { setSearchParams } = useCurrentSearchParams();

  const handleUpdateItemsOnPage = (value: string) => {
    setSearchParams({ page: '1', pageSize: value });
  };

  return (
    <div className={classes.select}>
      <h4>Number of card on the page:</h4>
      <select onChange={(e) => handleUpdateItemsOnPage(e.target.value)}>
        {selectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
