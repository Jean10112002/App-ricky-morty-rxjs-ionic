import { Info } from "./rickyMortyCharacter.interface";

export interface RickyAndMortyLocationI {
  info:    Info;
  results: ResultLocationI[];
}

export interface ResultLocationI {
  id:        number;
  name:      string;
  type:      string;
  dimension: string;
  residents: string[];
  url:       string;
  created:   Date;
}
