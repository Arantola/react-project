const baseURL = 'https://653fe29245bedb25bfc16586.mockapi.io/api/';

const getData = async (search = '') => {
  try {
    const requestURL = search === '' ? '/items' : `/items`; // TODO add search to api
    const response = await fetch(`${baseURL}${requestURL}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Fetch error!');
    }
  } catch (error) {
    throw new Error('Fetch error!');
  }
};

export default getData;
