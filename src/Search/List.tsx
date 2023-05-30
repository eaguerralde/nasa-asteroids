import React from 'react';
import { NearEarthObject, NearEarthObjects } from '../NasaApi/types';

type ListProps = {
  neo: NearEarthObjects;
};

export function List({ neo }: ListProps) {
  const allNeos: NearEarthObject[] = [];
  Object.keys(neo).forEach((neoDate) => allNeos.push(...neo[neoDate]));

  return (
    <>
      <h2>list</h2>
      <ul>
        {allNeos.map(neo => <li key={neo.id}>{neo.name}</li>)}
      </ul>
    </>
  );
}