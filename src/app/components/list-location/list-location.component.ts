import { Component, Input} from '@angular/core';
import { ResultLocationI } from 'src/app/interfaces/rickyMortyLocation.interface';
import { AnimationController, ModalController } from '@ionic/angular';
import { ModalCharactersPage } from '../modal-characters/modal-characters.page';
@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.scss'],
})
export class ListLocationComponent  {
  @Input() location!: ResultLocationI;
  constructor(
    private modalCtrl: ModalController,
    private animationCtrl: AnimationController,
  ) {
  }


  async openModal(residents: string[]) {
    console.log(residents);
    const modal = await this.modalCtrl.create({
      component: ModalCharactersPage,
      breakpoints:[0, 0.25, 0.5, 0.75,1],
      initialBreakpoint:0.25,
      componentProps: {
        residents,
      },
    });
     modal.present();
  }

}
