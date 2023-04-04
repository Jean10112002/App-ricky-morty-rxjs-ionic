import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ModalCharactersPageModule} from '../modal-characters/modal-characters.module'
import { ListEpisodeComponent } from './list-episode.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCharactersPageModule
  ],
  declarations: [ListEpisodeComponent],
  exports:[
    ListEpisodeComponent
  ]
})
export class ListEpisodeModule {}
