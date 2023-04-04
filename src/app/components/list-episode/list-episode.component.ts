import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResultEpisodeI } from 'src/app/interfaces/rickyMortyEpisode.interface';
import { ModalCharactersPage } from '../modal-characters/modal-characters.page';

@Component({
  selector: 'app-list-episode',
  templateUrl: './list-episode.component.html',
  styleUrls: ['./list-episode.component.scss'],
})
export class ListEpisodeComponent  {
  @Input() episode!: ResultEpisodeI;
  constructor(private modalCtrl: ModalController) {}


  async openModal(residents: string[]) {
    console.log(residents);
    const modal = await this.modalCtrl.create({
      component: ModalCharactersPage,
      breakpoints: [0, 0.25, 0.5, 0.75, 1],
      initialBreakpoint: 0.75,
      componentProps: {
        residents,
      },
    });
    modal.present();
  }
}
