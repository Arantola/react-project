import { useCallback, useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import classes from './Catalog.module.css';

import usePagination from '../../hooks/usePaginaton/usePagination';
import { fetchData, fetchDataWithName } from '../../services/apiService';
import { ApiResponse } from '../../services/apiTypes';

import Searcher from '../../components/Searcher/Searcher';
import CardList from '../../components/CardList/CardList';
import Paginator from '../../components/UI/Paginator/Paginator';

function Catalog() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchValue') || ''
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSeacrhParams] = useSearchParams();
  const { handleUpdateItemsOnPage, handleUpdatePageNumber } = usePagination(
    data,
    setSeacrhParams
  );
  const pageSize = searchParams.get('pageSize') || '';
  const currentPage = searchParams.get('page');
  const currentPageSize = searchParams.get('pageSize');

  const handleUpdateSearchValue = (newValue: string): void => {
    setSearchValue(newValue);
  };
  const hanldeFetchDataAndSetData = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    try {
      const fetchedData = searchValue
        ? await fetchDataWithName(searchValue, currentPage, currentPageSize)
        : await fetchData(currentPage, currentPageSize);

      setData(fetchedData);
      if (!currentPage && !currentPageSize) {
        if (fetchedData && fetchedData.page && fetchedData.pageSize) {
          setSeacrhParams({
            page: fetchedData.page.toString(),
            pageSize: fetchedData.pageSize.toString(),
          });
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, currentPageSize, searchValue, setSeacrhParams]);

  const handleSendSearchValue = async (): Promise<void> => {
    localStorage.setItem('searchValue', searchValue);
    hanldeFetchDataAndSetData();
    if (data) {
      setSeacrhParams({
        page: '1',
        pageSize: data.pageSize.toString(),
      });
    }
  };

  useEffect(() => {
    hanldeFetchDataAndSetData();
  }, [currentPage, pageSize, hanldeFetchDataAndSetData]);

  const isPaginateNecessary: boolean | null =
    data && data?.totalCount > data?.pageSize;

  return (
    <div className={classes.catalog}>
      <Searcher
        searchValue={searchValue}
        isLoading={isLoading}
        pageSize={pageSize}
        handleUpdateSearchValue={handleUpdateSearchValue}
        handleSendSearchValue={handleSendSearchValue}
        handleUpdateItemsOnPage={handleUpdateItemsOnPage}
      />
      <div className={classes.content}>
        <section>
          <CardList isLoading={isLoading} data={data?.data || []} />
          {isPaginateNecessary && (
            <Paginator
              data={data}
              handleUpdatePageNumber={handleUpdatePageNumber}
            />
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
