import classes from './Paginator.module.css';

import { UpdatePageNumberTypes } from '../../../hooks/usePaginaton/usePagination';
import { ApiResponse } from '../../../services/apiTypes';

import Button from '../Button/Button';

interface PaginateProps {
  data: ApiResponse | null;
  handleUpdatePageNumber: (type: UpdatePageNumberTypes) => void;
}

function Paginator({ data, handleUpdatePageNumber }: PaginateProps) {
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
