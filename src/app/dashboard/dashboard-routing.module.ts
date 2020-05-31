import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlacesPage } from './dashboard.page';
//
const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'jobs',
        children: [
          {
            path: '',
            loadChildren: './jobs/jobs.module#DiscoverPageModule'
          }
        ]
      },
      {
        path: 'alerts',
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
        redirectTo: '/dashboard/tabs/jobs',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard/tabs/jobs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule {}
