import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, Subject, takeUntil} from 'rxjs';
import { CharacterI } from 'src/app/interfaces/rickyMortyCharacter.interface';
import { RickymortyService } from 'src/app/services/rickymorty.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit,OnDestroy {
  id!:number;
  character$:Observable<CharacterI>=new Observable();
  suscription$:Subject<boolean>=new Subject();
  isLoading$=this.spinnerService.isLoading$;

  constructor(private route:ActivatedRoute, private rickyMortyService:RickymortyService,private spinnerService:SpinnerService) {
    this.route.paramMap
      .pipe(
        takeUntil(this.suscription$),
        map(params => params.get('id'))
      )
      .subscribe((id:any) => {
        this.id=id
      });
   }
  ngOnInit() {
    this.character$=this.rickyMortyService.getCharacter(this.id);
  }
  ngOnDestroy(): void {
    this.suscription$.next(true);
    this.suscription$.complete()
  }



}
