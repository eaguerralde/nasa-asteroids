import React, { useEffect, useState } from 'react';
import nasaApi from '../NasaApi/nasaApi'
import { List } from './List';
import { SearchResult } from '../NasaApi/types';
import favouritesAoi from '../Favourites/favouritesApi';
import { Favourite } from '../Favourites/types';

function validDateInput(dateString: string) {
  if (dateString === '') return true;
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (regex.test(dateString) && !isNaN(Date.parse(dateString))) {
    return true;
  } else {
    console.log('invalid ' + dateString + ' ' + regex.test(dateString))
    return false
  };
}

export function Search() {
  const [neoSearchParams, setNeoSearchParams] = useState({from: '', to: ''});
  const [searchError, setSearchError] = useState('');
  const [neoResult, setNeoResult] = useState<SearchResult>();
  const [favourites, setFavourites] = useState<Favourite[]>([]);
  const [favouritesError, setFavouritesError] = useState('');

  const onChangeDate = (event: React.FormEvent<HTMLInputElement>) => {
    let searchParams = { ...neoSearchParams };
    if (event.currentTarget.id === 'searchFrom') {
      searchParams.from = event.currentTarget.value
    }
    if (event.currentTarget.id === 'searchTo') {
      searchParams.to = event.currentTarget.value
    }
    setNeoSearchParams(searchParams);
  };

  useEffect(() => {
    if (validDateInput(neoSearchParams.to) && validDateInput(neoSearchParams.from) ) {
      nasaApi.getNeo(neoSearchParams.from, neoSearchParams.to)
      .then((res) =>{
        setNeoResult(res);
        setSearchError('');
      })
      .catch((error) =>{
        setSearchError(error);
      })
    } else {
      setSearchError('Please, enter valid dates (yyyy-mm-dd)');
    }
  },[neoSearchParams]);

  useEffect(() => {
    favouritesAoi.read()
    .then((res) =>{
      setFavourites(res);
      setFavouritesError('');
    })
    .catch((error) =>{
      setFavouritesError(error?.message);
    })
  }, [])

  return (
    <>
      <h1>Search</h1>
      <span>From: <input
        type="text"
        placeholder='yyyy-mm-dd'
        value={neoSearchParams.from}
        onChange={onChangeDate}
        id='searchFrom'
      />
     </span>
     <span>To: <input
        type="text"
        placeholder='yyyy-mm-dd'
        value={neoSearchParams.to}
        onChange={onChangeDate}
        id='searchTo'
      />
      </span>
      {favouritesError !== '' && <p>Favourites Error: {favouritesError}</p>}
      {searchError !== '' && <p>Search Error: {searchError}</p>}
      {neoResult?.near_earth_objects && 
      <List neos={neoResult.near_earth_objects} favourites={favourites} />}
    </>
  );
}