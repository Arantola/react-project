import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import classes from './Paginator.module.css';

interface PaginatorProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

function Paginator({ hasNextPage, hasPrevPage }: PaginatorProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { search, pathname } = location;
  const [page, setPage] = useState('1');
  const [limit, setLimit] = useState('10');

  useEffect(() => {
    const queryParams = new URLSearchParams(search);

    const queryLimit = queryParams.get('limit') ?? '10';
    const queryPage = queryParams.get('page') ?? '1';
    setPage(queryPage);
    setLimit(queryLimit);
  }, [search]);

  const handleButtonPrevClick = () => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', String(+page - 1));

    navigate({
      pathname,
      search: `?${searchParams.toString()}`,
    });
  };

  const handleButtonNextClick = () => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', String(+page + 1));

    navigate({
      pathname,
      search: `?${searchParams.toString()}`,
    });
  };

  return (
    <div className={classes.paginator}>
      <button
        type="button"
        disabled={!hasPrevPage}
        onClick={handleButtonPrevClick}
      >
        prev page
      </button>
      <div>
        {page} / {Math.ceil(10 / Number(limit))}
      </div>
      <button
        type="button"
        disabled={!hasNextPage}
        onClick={handleButtonNextClick}
      >
        next page
      </button>
    </div>
  );
}

export default Paginator;
