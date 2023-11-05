import classes from './Dropdown.module.css';

export interface DropDownProps {
  pageSize: string | null;
  handleUpdateItemsOnPage: (value: string) => void;
}

export default function Dropdown({
  pageSize,
  handleUpdateItemsOnPage,
}: DropDownProps) {
  const selectOptions = [5, 10, 15, 20];
  return (
    <div className={classes.select}>
      <h4>Number of card on the page:</h4>
      <select onChange={(e) => handleUpdateItemsOnPage(e.target.value)}>
        <option value="" hidden>
          {pageSize}
        </option>
        {selectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
