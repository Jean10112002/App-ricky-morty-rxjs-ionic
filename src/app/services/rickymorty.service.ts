import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CharacterI, RickyAndMortyCharacterI } from '../interfaces/rickyMortyCharacter.interface';
import {  catchError, EMPTY, EmptyError, forkJoin, map, Observable, of } from 'rxjs';
import { RickyAndMortyLocationI } from '../interfaces/rickyMortyLocation.interface';
import { EpisodesI, ResultEpisodeI } from '../interfaces/rickyMortyEpisode.interface';

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
  getCharactersLocationOrEpisode(urls:string[]):Observable<CharacterI[]>{
    const observables = urls.map(url => this.http.get(url));
    return forkJoin(observables) as Observable<CharacterI[]>;
  }
  getEpisodes():Observable<EpisodesI>{
    return this.http.get<EpisodesI>(`${this.API}episode`)
  }
  getEpisodesPaginate(url:string):Observable<EpisodesI>{
    return this.http.get<EpisodesI>(`${url}`)
  }
  getEpisodesCharacter(urls:string[]):Observable<ResultEpisodeI[]>{
    const observables = urls.map(url => this.http.get(url));
    return forkJoin(observables) as Observable<ResultEpisodeI[]>;
  }
  getLocations():Observable<RickyAndMortyLocationI>{
    return this.http.get<RickyAndMortyLocationI>(`${this.API}location`);
  }
  getLocationsPaginate(url:string):Observable<RickyAndMortyLocationI>{
    return this.http.get<RickyAndMortyLocationI>(`${url}`);
  }
  filterCharacter(name:string):Observable<CharacterI[]>{
    return this.http.get<RickyAndMortyCharacterI>(`${this.API}character/?name=${name}`).pipe(
      map(res=>res?.results),
      catchError((err)=>EMPTY)
    );
  }

}
