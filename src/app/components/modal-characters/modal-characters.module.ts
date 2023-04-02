import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ModalCharactersPage } from './modal-characters.page';
import { ComponentsSharedModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsSharedModule
  ],
  declarations: [ModalCharactersPage],
  exports:[
    ModalCharactersPage
  ]
})
export class ModalCharactersPageModule {}
