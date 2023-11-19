import { useQueryClient } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

export type SearchParams = {
  name?: string;
  page?: string;
  pageSize?: string;
};

export default function useCurrentSearchParams() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getSearchParams = (): SearchParams => {
    const name = searchParams.get('name') || '';
    const page = searchParams.get('page') || '1';
    const pageSize = searchParams.get('pageSize') || '5';

    return { name, page, pageSize };
  };

  const setSearchParams = ({ name, page, pageSize }: SearchParams): void => {
    const currentPath = window.location.pathname;
    const newSearchParams = new URLSearchParams(window.location.search);

    if (name) {
      newSearchParams.set('name', name);
      queryClient.setQueryData('name', name);
    }

    if (page) {
      newSearchParams.set('page', page);
      queryClient.setQueryData('page', page);
    }

    if (pageSize) {
      newSearchParams.set('pageSize', pageSize);
      queryClient.setQueryData('pageSize', pageSize);
    }

    navigate(`${currentPath}?${newSearchParams.toString()}`);
  };

  return {
    getSearchParams,
    setSearchParams,
  };
}
