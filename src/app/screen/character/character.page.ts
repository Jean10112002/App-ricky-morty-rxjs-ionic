import { Component, OnInit, ViewChild } from '@angular/core';
import {  IonContent, IonInfiniteScroll } from '@ionic/angular';
import { map,  tap } from 'rxjs';
import { CharacterI, RickyAndMortyCharacterI } from 'src/app/interfaces/rickyMortyCharacter.interface';
import { RickymortyService } from 'src/app/services/rickymorty.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll!:any;
  @ViewChild(IonContent) content!: IonContent;
  arrowToTop:Boolean=false;
  characters!:CharacterI[];
  isLoading$=this.spinnerService.isLoading$;
  nextPage!:string
  constructor(private readonly rickyMortyService:RickymortyService,private spinnerService:SpinnerService) {
  }


  ngOnInit() {
   this.rickyMortyService.getCharacters().pipe(tap(res=>{
    this.nextPage=res.info.next
   }),map((res:RickyAndMortyCharacterI)=>res.results
    )).subscribe((data)=>{
      this.characters=data;
    })

  }
  loadMore(event:any){
    this.arrowToTop=true;
    if(this.nextPage!==null){
      this.rickyMortyService.getCharactersPaginate(this.nextPage).pipe(
        tap(res=>{
          this.nextPage=res.info.next
        }),
        map((res)=>res.results)
      ).subscribe(data=>{
        console.log(data)
        data.forEach(d=>{
          this.characters.push(d)
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
