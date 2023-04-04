import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { map, Subject, tap } from 'rxjs';
import {  ResultEpisodeI } from 'src/app/interfaces/rickyMortyEpisode.interface';
import { RickymortyService } from 'src/app/services/rickymorty.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {
  isLoading$:Subject<boolean>
  @ViewChild(IonInfiniteScroll) infiniteScroll!:any;
  @ViewChild(IonContent) content!: IonContent;
  arrowToTop:Boolean=false;
  nextPage!:string
  episodes!:ResultEpisodeI[];

  constructor(spinnerService:SpinnerService,private readonly rickyMortyService:RickymortyService) {
    this.isLoading$=spinnerService.isLoading$;
   }

  ngOnInit() {
    this.rickyMortyService.getEpisodes().pipe(
      tap(e=>this.nextPage=e.info.next),
      map(e=>e.results)
    ).subscribe(results=>{
      this.episodes=results;
    })
  }

  loadMore(event:any){
    this.arrowToTop=true;
    if(this.nextPage!==null){
      this.rickyMortyService.getEpisodesPaginate
      (this.nextPage).pipe(
        tap(res=>{
          this.nextPage=res.info.next
        }),
        map((res)=>res.results)
      ).subscribe(data=>{
        console.log(data)
        data.forEach(d=>{
          this.episodes.push(d)
        })
      })
    }else{
      this.infiniteScroll.disabled=true;
    }
    event.target.complete();
  }

  scrollTop() {
    this.content.scrollToTop(500);
  }

}
