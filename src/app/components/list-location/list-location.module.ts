import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentsSharedModule } from '../components.module';
import { ModalCharactersPageModule } from '../modal-characters/modal-characters.module';
import { ModalCharactersPage } from '../modal-characters/modal-characters.page';
import { ListLocationComponent } from './list-location.component';


@NgModule({
  imports: [CommonModule,
    IonicModule,
    RouterModule,],
  exports: [ListLocationComponent],
  declarations: [ListLocationComponent],
  providers: [],

})
export class ListLocationModule { }
