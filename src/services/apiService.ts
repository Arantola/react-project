import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from './apiTypes';
import { SearchParams } from '../hooks/useSearchParams';

const BASE_URL = 'https://api.pokemontcg.io/v2/cards/';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchData: builder.query<ApiResponse, SearchParams>({
      query: (args): string => {
        const { name, page, pageSize } = args;
        const query = `page=${page || '1'}&pageSize=${
          pageSize || '10'
        }&select=id,name,images`;
        return name !== '' ? `?q=name:${name}*&${query}` : `?${query}`;
      },
    }),
    fetchDataWithID: builder.query({
      // <ApiResponse, string>
      query: (id) => `${id}`,
    }),
  }),
});

export const { useFetchDataQuery, useFetchDataWithIDQuery } = api;
