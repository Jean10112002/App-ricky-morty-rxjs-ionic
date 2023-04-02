import { AfterViewInit, ChangeDetectorRef, Component, Input} from '@angular/core';
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
    private cd: ChangeDetectorRef
  ) {}

  async openModal(residents: string[]) {
    console.log(residents);
    const modal = await this.modalCtrl.create({
      component: ModalCharactersPage,
      componentProps: {
        residents,
      },
      enterAnimation: this.enterAnimation,
      leaveAnimation: this.leaveAnimation,
    });
    await modal.present();
  }
  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };
}
