import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterPageRoutingModule } from './character-routing.module';

import { CharacterPage } from './character.page';
import { RouterModule } from '@angular/router';
import { ComponentsSharedModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterPageRoutingModule,
    RouterModule,
    ComponentsSharedModule
  ],

    declarations: [CharacterPage]
})
export class CharacterPageModule {}
