import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { PlacesService } from '../places.service';
import { Place } from '../place.model';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ButtonRendererComponent } from './button-renderer.component';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss']
})
export class DiscoverPage implements OnInit {

  items: Observable<any[]>;

  private gridApi;
  loadedPlaces: Place[];

  columnDefs = [
    {headerName: 'Jenkins Job Id', field: 'jenkinsJobId', sortable: true, resizable:true, filter: true,rowDrag: true,},
    {headerName: 'User Product Guid', field: 'userProductGuid', sortable: true, resizable:true,filter: true,   enableCellChangeFlash: true},
    {headerName: 'File Name', field: 'fileName', sortable: true, resizable:true,filter: true,   enableCellChangeFlash: true},
    {headerName: 'Start Time', field: 'startTime', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
    {headerName: 'Status', field: 'status', sortable: true,resizable:true, filter: true,   cellStyle: function(params) {
      if (params.value=='Stopped') {

          return {color: 'black', backgroundColor: 'rgba(255,128,171,.4)'};
      } if (params.value=='Completed') {

        return {color: 'black', backgroundColor: 'cyan'};
    } if (params.value=='Aborted') {

      return {color: 'black', backgroundColor: 'rgba(185,246,202,.4)'};
  } if (params.value=='Cancelled') {

    return {color: 'black', backgroundColor: 'orange'};
}if (params.value=='Running') {

  return {color: 'black', backgroundColor:  'rgba(24,228,58,1)'};
}else {
          return null;
      }
  }},
    {headerName: 'End Time', field: 'endTime', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
    {headerName: 'Org', field: 'org', sortable: true, resizable:true,filter: true},
    {headerName: 'Sub Status', field: 'subStatus', sortable: true,resizable:true, filter: true,   cellStyle: function(params) {
      if (params.value=='Stopped') {

          return {color: 'black', backgroundColor: 'rgba(255,128,171,.4)'};
      } if (params.value=='Completed') {

        return {color: 'black', backgroundColor: 'cyan'};
    } if (params.value=='Aborted') {

      return {color: 'black', backgroundColor: 'rgba(185,246,202,.4)'};
  } if (params.value=='Cancelled') {

    return {color: 'black', backgroundColor: 'orange'};
  }if (params.value=='Running') {

  return {color: 'black', backgroundColor:  'rgba(24,228,58,1)'};
  }else {
          return null;
      }
  }},
    {headerName: 'Location', field: 'loc', sortable: true, resizable:true,filter: true},
    {headerName: 'Total SSNs', field: 'totalSsns', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
   {headerName: 'Stoppable', field:'stoppable',sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true,
   cellRendererFramework: ButtonRendererComponent,
   cellRendererParams: {
     onClick: this.onBtnClick1.bind(this),
     label: 'Stop'
   }},
  
  {headerName: 'Paychex Opted In', field: 'payxOptedIn', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
  {headerName: 'NR Opted In', field: 'nrOptedIn', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
  {headerName: 'Paychex SSNs', field: 'payxSsns', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true}
  

  

];
rowData:any;
rowDataClicked1 = {};
themevar;
gridOptions;
frameworkComponents: any;

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController,
    private firestore: AngularFirestore
  ) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }

  ngOnInit() {
    // this.rowData = this.firestore.collection('jobs55').valueChanges();
   this.rowData = this.placesService.getPlaces();
   this.themevar = "ag-theme-balham";

  }

  refresh(){
    this.rowData = this.placesService.getPlaces();
    // this.rowData = this.firestore.collection('jobs').valueChanges();

  }
  changeTheme(){
    const months = ["ag-theme-balham", "ag-theme-balham-dark", "ag-theme-alpine", "ag-theme-alpine-dark", "ag-theme-material"];
    const randomTheme = months[Math.floor(Math.random() * months.length)];
    this.themevar = randomTheme;
    this.refresh();
  }

  changeThemeTo(theme){
    this.themevar = theme;
    // this.refresh();
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
  }
  onGridReady(params: any) {
    console.log('grid ready');
 
    console.log("Grid api:", params.api);
    console.log("Col api:", params.columnApi);
    this.gridApi = params.api;
    
    
  }



  onRowClicked(event: any) { console.log('row', event); }
  onCellClicked(event: any) { console.log('cell', event); }
  onSelectionChanged(event: any) { console.log("selection", event); }

  confirmStop(){
    let rowData = [];
    this.gridApi.forEachNode(node => rowData.push(node.data));
    console.log("rows:",rowData);
    
    return rowData;
  }

  
}
