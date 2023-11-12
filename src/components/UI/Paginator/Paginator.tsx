import classes from './Paginator.module.css';

import { UpdatePageNumberTypes } from '../../../hooks/usePaginaton/usePagination';
import { useAppContext } from '../../../context/appContext';
import Button from '../Button/Button';

interface PaginateProps {
  handleUpdatePageNumber: (type: UpdatePageNumberTypes) => void;
}

function Paginator({ handleUpdatePageNumber }: PaginateProps) {
  const { data } = useAppContext()!;

  const totalPages =
    data?.totalCount && data?.pageSize
      ? Math.ceil(data.totalCount / data.pageSize)
      : undefined;

  return (
    <div className={classes.paginator}>
      <Button
        onClick={() => handleUpdatePageNumber(UpdatePageNumberTypes.FirstPage)}
        disabled={data?.page === 1}
      >
        First
      </Button>
      <Button
        onClick={() => handleUpdatePageNumber(UpdatePageNumberTypes.Decrement)}
        disabled={data?.page === 1}
      >
        &lt;
      </Button>
      <span>
        {data?.page} / {totalPages}
      </span>
      <Button
        onClick={() => handleUpdatePageNumber(UpdatePageNumberTypes.Increment)}
        disabled={data?.page === totalPages}
      >
        &gt;
      </Button>
      <Button
        onClick={() => handleUpdatePageNumber(UpdatePageNumberTypes.LastPage)}
        disabled={data?.page === totalPages}
      >
        Last
      </Button>
    </div>
  );
}

export default Paginator;
