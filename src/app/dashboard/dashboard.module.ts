import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';
import { PlacesRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PlacesRoutingModule
  ],
  declarations: [DashboardPage]
})
export class PlacesPageModule {}
