import React, { useEffect, useState } from 'react';
import { NearEarthObject, NearEarthObjects } from '../NasaApi/types';
import { ListItem } from './ListItem';
import { Favourite } from '../Favourites/types';

type ListProps = {
  neos: NearEarthObjects;
  favourites: Favourite[];
  setFavourite: (neoId: string) => void;
  unsetFavourite: (neoId: string) => void;
};

export function List({ neos, favourites, setFavourite, unsetFavourite }: ListProps) {
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
  const handleFavClick = (neoId: string, isFavourite: boolean) => {
    if (isFavourite) {
      unsetFavourite(neoId);
    } else {
      setFavourite(neoId);
    }
  }

  useEffect(() => {
    setFavList(favourites.map(fav => fav.neoId));
  }, [favourites])

  return (
    <>
      <h2>list</h2>
      <span>Favs: {JSON.stringify(favourites)}</span>
      <ul className="list">
        {allNeos.map(neo => <li key={neo.id}>
          <span className="list-name" onClick={() => handleListClick(neo.id)}>{neo.name} {neo.id}</span> 
          <button 
            className={`list-fav-btn${favList.includes(neo.id) ? ' selected' : ''}`} 
            role="button" 
            onClick={() => handleFavClick(neo.id, favList.includes(neo.id))}
          />
          {selectedItem === neo.id && <ListItem neo={neo} />}
        </li>)}
      </ul>
    </>
  );
}