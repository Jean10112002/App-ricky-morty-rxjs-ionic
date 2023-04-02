import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CharacterI, RickyAndMortyCharacterI } from '../interfaces/rickyMortyCharacter.interface';
import {  Observable } from 'rxjs';
import { RickyAndMortyLocationI } from '../interfaces/rickyMortyLocation.interface';

@Injectable({
  providedIn: 'root'
})
export class RickymortyService {
  private readonly API:string="https://rickandmortyapi.com/api/"
  constructor(private readonly http:HttpClient) { }
  getCharacters():Observable<RickyAndMortyCharacterI>{
    return this.http.get<RickyAndMortyCharacterI>(`${this.API}character`);
  }
  getCharactersPaginate(url:string):Observable<RickyAndMortyCharacterI>{
    return this.http.get<RickyAndMortyCharacterI>(`${url}`);
  }
  getCharacter(id:number):Observable<CharacterI>{
    return this.http.get<CharacterI>(`${this.API}character/${id}`)
  }
  getEpisodes(){

  }
  getLocations():Observable<RickyAndMortyLocationI>{
    return this.http.get<RickyAndMortyLocationI>(`${this.API}location`);
  }
  getLocationsPaginate(url:string):Observable<RickyAndMortyLocationI>{
    return this.http.get<RickyAndMortyLocationI>(`${url}`);
  }
}
