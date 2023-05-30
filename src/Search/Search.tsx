import React, { useEffect, useState } from 'react';
import nasaApi from '../NasaApi/nasaApi'
import { List } from './List';
import { SearchResult } from '../NasaApi/types';

export function Search() {
  const [neoSearchParams, setNeoSearchParams] = useState({});
  const [searchError, setSearchError] = useState('');
  const [neoResult, setNeoResult] = useState<SearchResult>();

  useEffect(() => {
    nasaApi.getNeo()
    .then((res) =>{
      setNeoResult(res);
    })
    .catch((error) =>{
      setSearchError(error);
    })
  },[neoSearchParams]);

  return (
    <>
      <h1>Search</h1>
      {searchError !== '' && <p>searchError</p>}
      {neoResult?.near_earth_objects && <List neo={neoResult.near_earth_objects} />}
    </>
  );
}