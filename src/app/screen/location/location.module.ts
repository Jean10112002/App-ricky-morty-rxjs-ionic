import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';

import { LocationPage } from './location.page';
import { ComponentsSharedModule } from 'src/app/components/components.module';
import { ListLocationModule } from 'src/app/components/list-location/list-location.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationPageRoutingModule,
    ComponentsSharedModule,
    ListLocationModule
  ],
  declarations: [LocationPage]
})
export class LocationPageModule {}
