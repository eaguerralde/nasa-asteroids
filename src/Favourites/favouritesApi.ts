import axios from 'axios';
import { Favourite } from './types';

const baseUrl = process.env.REACT_APP_FAVOURITES_BASE_URL;
const favouritesUrl = `${baseUrl}/favourites`;

const favouritesApi = {
  async read(): Promise<Favourite[]> {
    try {
      const response = await axios.post<Favourite[]>(`${favouritesUrl}/read`);
      return Promise.resolve(response.data);
    } catch(error) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response);
      } else {
        return Promise.reject(error);
      }
    }
  },
}

export default favouritesApi;