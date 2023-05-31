import React from 'react';
import { NearEarthObject } from '../NasaApi/types';

type ListProps = {
  neo: NearEarthObject;
};

export function ListItem({ neo }: ListProps) {

  return (<ul>
    <li>links: <span>{neo.links.self}</span></li>
    <li>neo_reference_id: <span>{neo.neo_reference_id}</span></li>
    <li>name: <span>{neo.name}</span></li>
    <li>nasa_jpl_url: <span>{neo.nasa_jpl_url}</span></li>
    <li>absolute_magnitude_h: <span>{neo.absolute_magnitude_h}</span></li>
    <li>estimated_diameter: <span>{neo.estimated_diameter.kilometers.estimated_diameter_max}</span></li>
    <li>is_potentially_hazardous_asteroid: <span>{neo.is_potentially_hazardous_asteroid}</span></li>
    <li>close_approach_data: <ul>
      {neo.close_approach_data.map(dataItem => (<li><ul>
        <li>close_approach_date: {dataItem.close_approach_date.toString()}</li>
        <li>close_approach_date_full: {dataItem.close_approach_date_full}</li>
        <li>epoch_date_close_approach: {dataItem.epoch_date_close_approach}</li>
        <li>relative_velocity: {dataItem.relative_velocity.kilometers_per_hour}</li>
        <li>miss_distance: {dataItem.miss_distance.kilometers}</li>
        <li>orbiting_body: {dataItem.orbiting_body}</li>
        <li>close_approach_date_full: {dataItem.close_approach_date_full}</li>
    </ul></li> ))}
      </ul></li>
    <li>is_sentry_object: <span>{neo.is_sentry_object}</span></li>
  </ul>);
}

