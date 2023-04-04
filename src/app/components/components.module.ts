import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListCharacterComponent } from './list-character/list-character.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  declarations: [
    ListCharacterComponent,
  ],
  exports:[
    ListCharacterComponent,

  ],

})
export class ComponentsSharedModule {}
