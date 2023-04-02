import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListCharacterComponent } from './list-character/list-character.component';
import { ListEpisodeComponent } from './list-episode/list-episode.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  declarations: [
    ListCharacterComponent,
    ListEpisodeComponent,
  ],
  exports:[
    ListCharacterComponent,
    ListEpisodeComponent,
  ],

})
export class ComponentsSharedModule {}
