import { useCallback, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import classes from './Catalog.module.css';

import { useAppContext } from '../../context/appContext';
import Searcher from '../../components/Searcher/Searcher';
import CardList from '../../components/CardList/CardList';
import Paginator from '../../components/UI/Paginator/Paginator';
import { fetchData, fetchDataWithName } from '../../services/apiService';
import usePagination from '../../hooks/usePaginaton/usePagination';

function Catalog() {
  const { data, setData, searchValue, setSearchValue, setIsLoading } =
    useAppContext()!;

  const [searchParams, setSearchParams] = useSearchParams();
  const { handleUpdateItemsOnPage, handleUpdatePageNumber } = usePagination(
    data,
    setSearchParams
  );
  const pageSize = searchParams.get('pageSize') || '';
  const currentPage = searchParams.get('page');
  const currentPageSize = searchParams.get('pageSize');

  const handleUpdateSearchValue = (newValue: string): void => {
    setSearchValue(newValue);
  };

  const handleFetchDataAndSetData = useCallback(async (): Promise<void> => {
    setIsLoading(true);

    try {
      const fetchedData = searchValue
        ? await fetchDataWithName(searchValue, currentPage, currentPageSize)
        : await fetchData(currentPage, currentPageSize);
      setData(fetchedData);

      if (fetchedData !== null) {
        if (!currentPage && !currentPageSize) {
          if (fetchedData.page && fetchedData.pageSize) {
            setSearchParams({
              page: fetchedData.page.toString(),
              pageSize: fetchedData.pageSize.toString(),
            });
          }
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [
    currentPage,
    currentPageSize,
    searchValue,
    setData,
    setSearchParams,
    setIsLoading,
  ]);

  const handleSendSearchValue = async (): Promise<void> => {
    localStorage.setItem('searchValue', searchValue);
    handleFetchDataAndSetData();
    if (data) {
      setSearchParams({
        page: '1',
        pageSize: data.pageSize.toString(),
      });
    }
  };

  useEffect(() => {
    handleFetchDataAndSetData();
  }, [currentPage, pageSize, handleFetchDataAndSetData]);

  const isPaginateNecessary: boolean | null =
    data && data?.totalCount > data?.pageSize;

  return (
    <div className={classes.catalog}>
      <Searcher
        pageSize={pageSize}
        handleUpdateSearchValue={handleUpdateSearchValue}
        handleSendSearchValue={handleSendSearchValue}
        handleUpdateItemsOnPage={handleUpdateItemsOnPage}
      />
      <div className={classes.content}>
        <section>
          <CardList />
          {isPaginateNecessary && (
            <Paginator handleUpdatePageNumber={handleUpdatePageNumber} />
          )}
        </section>
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default Catalog;
