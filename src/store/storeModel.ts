export interface EarthquakesState {
  earthquakes: Earthquake[];
}

export interface Earthquake {
  geometry: Geometry;
  id: string;
  properties: Properties;
  type: string;
}

export interface Geometry {
  coordinates: number[];
  type: string;
}

export interface Properties {
  alert: any;
  cdi: any;
  code: string;
  detail: string;
  dmin: number;
  felt: any;
  gap: number;
  ids: string;
  mag: number;
  magType: string;
  mmi: any;
  net: string;
  nst: number;
  place: string;
  rms: number;
  sig: number;
  sources: string;
  status: string;
  time: number;
  title: string;
  tsunami: number;
  type: string;
  types: string;
  tz: any;
  updated: number;
  url: string;
}
