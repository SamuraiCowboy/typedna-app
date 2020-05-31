import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgGridModule } from 'ag-grid-angular';
import { DiscoverPage } from './jobs.page';
import { ButtonRendererComponent } from './button-renderer.component';


const routes: Routes = [
  {
    path: '',
    component: DiscoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([])
  ],
  declarations: [DiscoverPage,ButtonRendererComponent]
})
export class DiscoverPageModule {}
