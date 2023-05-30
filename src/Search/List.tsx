import React, { MouseEventHandler, ReactElement, useState } from 'react';
import { NearEarthObject, NearEarthObjects } from '../NasaApi/types';
import { ListItem } from './ListItem';

type ListProps = {
  neos: NearEarthObjects;
};

export function List({ neos }: ListProps) {
  const allNeos: NearEarthObject[] = [];
  Object.keys(neos).forEach((neoDate) => allNeos.push(...neos[neoDate]));
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const handleListClick = (neoId: string) => {
    setSelectedItem(neoId);
  }

  return (
    <>
      <h2>list</h2>
      <ul>
        {allNeos.map(neo => <li key={neo.id} onClick={() => handleListClick(neo.id)}>
          {neo.name}
          {selectedItem === neo.id && <ListItem neo={neo} />}
        </li>)}
      </ul>
    </>
  );
}