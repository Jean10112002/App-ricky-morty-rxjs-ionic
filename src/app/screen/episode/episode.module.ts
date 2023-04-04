import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodePageRoutingModule } from './episode-routing.module';

import { EpisodePage } from './episode.page';
import { ComponentsSharedModule } from 'src/app/components/components.module';
import { ListEpisodeModule } from 'src/app/components/list-episode/list-episode.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodePageRoutingModule,
    ComponentsSharedModule,
    ListEpisodeModule
  ],
  declarations: [EpisodePage]
})
export class EpisodePageModule {}
