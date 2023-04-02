import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { map, tap } from 'rxjs';
import { ResultLocationI,RickyAndMortyLocationI } from 'src/app/interfaces/rickyMortyLocation.interface';
import { RickymortyService } from 'src/app/services/rickymorty.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll!:any;
  @ViewChild(IonContent) content!: IonContent;
  arrowToTop:Boolean=false;
  locations!:ResultLocationI[];
  isLoading$=this.spinnerService.isLoading$;
  nextPage!:string
  constructor(private readonly rickyMortyService:RickymortyService,private spinnerService:SpinnerService) {
  }

  ngOnInit() {
    this.rickyMortyService.getLocations().pipe(tap(res=>{
      this.nextPage=res.info.next
     }),map((res:RickyAndMortyLocationI)=>res.results
      )).subscribe((data)=>{
        this.locations=data;
      })
  }
  loadMore(event:any){
    this.arrowToTop=true;
    if(this.nextPage!==null){
      this.rickyMortyService.getLocationsPaginate(this.nextPage).pipe(
        tap(res=>{
          this.nextPage=res.info.next
        }),
        map((res)=>res.results)
      ).subscribe(data=>{
        console.log(data)
        data.forEach(d=>{
          this.locations.push(d)
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
  showCharacters(location:ResultLocationI){
    console.log(location)
  }
}
