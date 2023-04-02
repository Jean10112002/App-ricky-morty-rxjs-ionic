import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ListLocationComponent } from './list-location.component';
import { ModalCharactersPageModule} from '../modal-characters/modal-characters.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCharactersPageModule
  ],
  declarations: [ListLocationComponent],
  exports:[
    ListLocationComponent
  ]
})
export class ListLocationModule {}
