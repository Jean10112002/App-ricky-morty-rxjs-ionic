import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';
import { map, Observable } from 'rxjs';
import { CharacterI } from 'src/app/interfaces/rickyMortyCharacter.interface';
import { RickymortyService } from 'src/app/services/rickymorty.service';

@Component({
  selector: 'app-modal-characters',
  templateUrl: './modal-characters.page.html',
  styleUrls: ['./modal-characters.page.scss'],
})
export class ModalCharactersPage implements AfterViewInit {

  characters$!:Observable<CharacterI[]>
  @Input() residents!:string[]
  constructor(private modalCtr:ModalController,private rickyMortyService:RickymortyService,) {
  }


  ngAfterViewInit(): void {
    this.characters$=this.rickyMortyService.getCharacters().pipe(map(res=>res.results))
  }
  closeModal(){
    this.modalCtr.dismiss(true);
  }


}
