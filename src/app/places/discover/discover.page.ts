import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss']
})
export class DiscoverPage implements OnInit {
  private gridApi;
  loadedPlaces: Place[];

  columnDefs = [
    {headerName: 'No', field: 'index', sortable: true, resizable:true, filter: true,checkboxSelection:true,rowDrag: true},
    {headerName: 'Job Id', field: '_id', sortable: true, resizable:true,filter: true,   enableCellChangeFlash: true},
    {headerName: 'Job Name', field: 'email', sortable: true, resizable:true,filter: true,   enableCellChangeFlash: true},
    {headerName: 'Verifier', field: 'verifier', sortable: true, resizable:true,filter: true},
    {headerName: 'Start Time', field: 'startTime', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
    {headerName: 'Is Active', field: 'isActive', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
    {headerName: 'Phone', field: 'phone', sortable: true, resizable:true,filter: true},
    {headerName: 'Comments', field: 'comments', sortable: true,resizable:true, filter: true},
    {headerName: 'Status', field: 'color', sortable: true,resizable:true, filter: true,  cellClass: function(params) {
      return params.value === 'Canceled' ? 'rag-green' : 'rag-amber';
    }}
];
rowData:any;
rowDataClicked1 = {};
themevar;

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
   this.rowData = this.placesService.getPlaces();
   this.themevar = "ag-theme-balham-dark";

  }

  refresh(){
    this.rowData = this.placesService.getPlaces();

  }
  changeTheme(){
    const months = ["ag-theme-balham", "ag-theme-balham-dark", "ag-theme-alpine", "ag-theme-alpine-dark", "ag-theme-material"];
    const randomTheme = months[Math.floor(Math.random() * months.length)];
    this.themevar = randomTheme;
    this.refresh();
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
  }
}
