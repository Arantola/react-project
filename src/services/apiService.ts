import { ApiResponse } from './apiTypes';

const BASE_URL = 'https://api.pokemontcg.io/v2/cards/';

async function fetchDataFromUrl(url: string): Promise<ApiResponse> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network error');
  }

  return response.json();
}

export async function fetchData(
  page?: string | null,
  pageSize?: string | null
): Promise<ApiResponse | null> {
  const params = `?page=${page || '1'}&pageSize=${
    pageSize || '5'
  }&select=id,name,images`;
  const url = `${BASE_URL}${params}`;

  try {
    const response: ApiResponse = await fetchDataFromUrl(url);
    return response;
  } catch (error) {
    throw new Error(`Fetching error: ${error}`);
  }
}

export async function fetchDataWithName(
  name: string,
  page?: string | null,
  pageSize?: string | null
): Promise<ApiResponse | null> {
  const params = `?q=name:${name}*&page=${page || '1'}&pageSize=${
    pageSize || '10'
  }&select=id,name,images`;
  const url = `${BASE_URL}${params}`;

  try {
    const response: ApiResponse = await fetchDataFromUrl(url);
    return response;
  } catch (error) {
    return Promise.reject(new Error(`Fetching error: ${error}`));
  }
}

export async function fetchDataWithID(id: string) {
  const url = `${BASE_URL}${id}`;

  try {
    const response: ApiResponse = await fetchDataFromUrl(url);
    return response;
  } catch (error) {
    return Promise.reject(new Error(`Fetching error: ${error}`));
  }
}
