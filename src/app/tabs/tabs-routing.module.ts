import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../screen/home/home.page';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component:TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../screen/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'character',
        loadChildren: () => import('../screen/character/character.module').then( m => m.CharacterPageModule)
      },
      {
        path: 'location',
        loadChildren: () => import('../screen/location/location.module').then( m => m.LocationPageModule)
      },
      {
        path: 'episode',
        loadChildren: () => import('../screen/episode/episode.module').then( m => m.EpisodePageModule)
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
