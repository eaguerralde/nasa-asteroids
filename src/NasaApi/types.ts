export interface NavLinks {
  previous: string;
  next: string;
  self: string;
}

export interface NearEarthObject {
  links:                             Links;
  id:                                string;
  neo_reference_id:                  string;
  name:                              string;
  nasa_jpl_url:                      string;
  absolute_magnitude_h:              number;
  estimated_diameter:                EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data:               CloseApproachDatum[];
  is_sentry_object:                  boolean;
}

export interface CloseApproachDatum {
  close_approach_date:       Date;
  close_approach_date_full:  string;
  epoch_date_close_approach: number;
  relative_velocity:         RelativeVelocity;
  miss_distance:             MissDistance;
  orbiting_body:             string;
}

export interface MissDistance {
  astronomical: string;
  lunar:        string;
  kilometers:   string;
  miles:        string;
}

export interface RelativeVelocity {
  kilometers_per_second: string;
  kilometers_per_hour:   string;
  miles_per_hour:        string;
}

export interface EstimatedDiameter {
  kilometers: Feet;
  meters:     Feet;
  miles:      Feet;
  feet:       Feet;
}

export interface Feet {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface Links {
  self: string;
}


export interface NearEarthObjects {
  [key: string]: NearEarthObject[];
}

export interface SearchResult {
  links: NavLinks;
  title: string;
  near_earth_objects: NearEarthObjects;
}