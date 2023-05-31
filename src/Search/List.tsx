import React, { useState } from 'react';
import { NearEarthObject, NearEarthObjects } from '../NasaApi/types';
import { ListItem } from './ListItem';
import { Favourite } from '../Favourites/types';

type ListProps = {
  neos: NearEarthObjects;
  favourites: Favourite[];
};

export function List({ neos, favourites }: ListProps) {
  const allNeos: NearEarthObject[] = [];
  Object.keys(neos).forEach((neoDate) => allNeos.push(...neos[neoDate]));
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const handleListClick = (neoId: string) => {
    if (selectedItem === neoId) {
      setSelectedItem(null);
    } else {
      setSelectedItem(neoId);
    }
  }
  const [favList, setFavList] = useState(favourites.map(fav => fav.neoId));
  const handleFavClick = (neoId: string) => {
    
  }

  return (
    <>
      <h2>list</h2>
      <span>Favs: {JSON.stringify(favourites)}</span>
      <ul>
        {allNeos.map(neo => <li key={neo.id}>
          <span onClick={() => handleListClick(neo.id)}>{neo.name} {neo.id}</span> 
          <button onClick={() => handleFavClick(neo.id)}>{ favList.includes(neo.id) ? 'Y' : 'N' }</button>
          {selectedItem === neo.id && <ListItem neo={neo} />}
        </li>)}
      </ul>
    </>
  );
}