const BASE_URL = 'https://653fe29245bedb25bfc16586.mockapi.io/api/';

const fetchData = async (search = '', page = '1', limit = '10') => {
  try {
    const url = new URL(`${BASE_URL}/items`);
    if (search !== '') {
      url.searchParams.append('search', search);
    }
    url.searchParams.append('page', page);
    url.searchParams.append('limit', limit);

    const response = await fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });

    if (response.ok) {
      return await response.json();
    }
    throw new Error('Fetch error!');
  } catch (error) {
    throw new Error('Fetch error!');
  }
};

export default fetchData;
