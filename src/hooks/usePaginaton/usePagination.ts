import { SetURLSearchParams } from 'react-router-dom';
import { ApiResponse } from '../../services/apiTypes';

export enum UpdatePageNumberTypes {
  Increment = 'increment',
  Decrement = 'decrement',
  LastPage = 'lastPage',
  FirstPage = 'firstPage',
}

export default function usePagination(
  data: ApiResponse | null,
  setSeacrhParams: SetURLSearchParams
) {
  const handleUpdatePageNumber = (type: UpdatePageNumberTypes): void => {
    if (!data) return;

    const currentPage = Number(data.page);
    const currentPageSize = data.pageSize.toString();
    const firstPage = '1';
    const lastPage = String(Math.ceil(data.totalCount / data.pageSize));

    switch (type) {
      case UpdatePageNumberTypes.Increment:
        setSeacrhParams({
          page: String(currentPage + 1),
          pageSize: currentPageSize,
        });
        break;
      case UpdatePageNumberTypes.Decrement:
        setSeacrhParams({
          page: String(currentPage - 1),
          pageSize: currentPageSize,
        });
        break;
      case UpdatePageNumberTypes.FirstPage:
        setSeacrhParams({
          page: firstPage,
          pageSize: currentPageSize,
        });
        break;
      case UpdatePageNumberTypes.LastPage:
        setSeacrhParams({
          page: lastPage,
          pageSize: currentPageSize,
        });
        break;
      default:
        break;
    }
  };

  const handleUpdateItemsOnPage = (value: string) => {
    const firstPage = '1';
    if (data) {
      setSeacrhParams({
        page: firstPage,
        pageSize: value,
      });
    }
  };

  return {
    handleUpdatePageNumber,
    handleUpdateItemsOnPage,
  };
}
