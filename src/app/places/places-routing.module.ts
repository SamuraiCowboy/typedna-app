import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlacesPage } from './places.page';
//
const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: './jobs/jobs.module#DiscoverPageModule'
          }
        ]
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: './alerts/alert.module#OffersPageModule'
          },
          {
            path: 'new',
            loadChildren:
              './alerts/new-alert/new-alert.module#NewOfferPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/places/tabs/discover',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule {}
