import axios from 'axios';
import { SearchResult } from './types';

const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;
const nasaApiUrl = `https://api.nasa.gov/neo/rest/v1/feed?api_key=${nasaApiKey}`;

const nasaApi = {
  async getNeo(startDate?: string, endDate?: string): Promise<SearchResult> {
    try {
      let searchParams = '';
      if (startDate) {
        searchParams += `&start_date=${startDate}`;
      }
      if (endDate) {
        searchParams += `&end_date=${endDate}`;
      }
      const response = await axios.get<SearchResult>(`${nasaApiUrl}${searchParams}`);
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

export default nasaApi;