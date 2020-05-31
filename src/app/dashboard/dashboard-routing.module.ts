import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPage } from './dashboard.page';
//
const routes: Routes = [
  {
    path: 'tabs',
    component: DashboardPage,
    children: [
      {
        path: 'jobs',
        children: [
          {
            path: '',
            loadChildren: './jobs/jobs.module#JobsPageModule'
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
