import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';
import {  Observable, Subject } from 'rxjs';
import { CharacterI } from 'src/app/interfaces/rickyMortyCharacter.interface';
import { RickymortyService } from 'src/app/services/rickymorty.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-modal-characters',
  templateUrl: './modal-characters.page.html',
  styleUrls: ['./modal-characters.page.scss'],
})
export class ModalCharactersPage implements AfterViewInit {

  characters$!:Observable<CharacterI[]>
  isLoading$:Subject<boolean>;
  @Input() residents!:string[]
  constructor(private modalCtr:ModalController,private rickyMortyService:RickymortyService, spinnerService:SpinnerService) {
    this.isLoading$=spinnerService.isLoading$;
  }
  ngAfterViewInit(): void {

    this.characters$=this.rickyMortyService.getCharactersLocationOrEpisode(this.residents)

  }
  closeModal(){
    this.modalCtr.dismiss(true);
  }


}
