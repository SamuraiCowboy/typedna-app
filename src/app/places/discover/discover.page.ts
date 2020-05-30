import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { PlacesService } from '../places.service';
import { Place } from '../place.model';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


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
    {headerName: 'Jenkins Job Id', field: 'jenkinsJobId', sortable: true, resizable:true, filter: true,checkboxSelection:true,rowDrag: true,headerCheckboxSelection: true,headerCheckboxSelectionFilteredOnly: true},
    {headerName: 'User Product Guid', field: 'userProductGuid', sortable: true, resizable:true,filter: true,   enableCellChangeFlash: true},
    {headerName: 'File Name', field: 'fileName', sortable: true, resizable:true,filter: true,   enableCellChangeFlash: true},
    {headerName: 'Start Time', field: 'startTime', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
    {headerName: 'End Time', field: 'endTime', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
    {headerName: 'Org', field: 'org', sortable: true, resizable:true,filter: true},
    {headerName: 'Location', field: 'loc', sortable: true, resizable:true,filter: true},
    {headerName: 'Total SSNs', field: 'totalSsns', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
   {headerName: 'Stoppable', field: 'stoppable', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
   {headerName: 'Status', field: 'status', sortable: true,resizable:true, filter: true,   cellStyle: function(params) {
      if (params.value=='Stopped') {
          //mark police cells as red
          return {color: 'black', backgroundColor: 'rgba(255,128,171,.4)'};
      } if (params.value=='Completed') {
        //mark police cells as red
        return {color: 'black', backgroundColor: 'cyan'};
    } if (params.value=='Aborted') {
      //mark police cells as red
      return {color: 'black', backgroundColor: 'rgba(185,246,202,.4)'};
  } if (params.value=='Cancelled') {
    //mark police cells as red
    return {color: 'black', backgroundColor: 'orange'};
}if (params.value=='Running') {
  //mark police cells as red
  return {color: 'black', backgroundColor: 'green'};
}else {
          return null;
      }
  }},
  {headerName: 'Paychex Opted In', field: 'payxOptedIn', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
  {headerName: 'NR Opted In', field: 'nrOptedIn', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
  {headerName: 'Paychex SSNs', field: 'payxSsns', sortable: true,resizable:true, filter: true,   enableCellChangeFlash: true},
  

  {headerName: 'Sub Status', field: 'subStatus', sortable: true,resizable:true, filter: true,   cellStyle: function(params) {
    if (params.value=='Stopped') {
        //mark police cells as red
        return {color: 'black', backgroundColor: 'rgba(255,128,171,.4)'};
    } if (params.value=='Completed') {
      //mark police cells as red
      return {color: 'black', backgroundColor: 'cyan'};
  } if (params.value=='Aborted') {
    //mark police cells as red
    return {color: 'black', backgroundColor: 'rgba(185,246,202,.4)'};
} if (params.value=='Cancelled') {
  //mark police cells as red
  return {color: 'black', backgroundColor: 'orange'};
}if (params.value=='Running') {
//mark police cells as red
return {color: 'black', backgroundColor: 'green'};
}else {
        return null;
    }
}}

];
rowData:any;
rowDataClicked1 = {};
themevar;
gridOptions;

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.rowData = this.firestore.collection('jobs').valueChanges();
  //  this.rowData = this.placesService.getPlaces();
   this.themevar = "ag-theme-balham-dark";

  }

  refresh(){
    // this.rowData = this.placesService.getPlaces();
    this.rowData = this.firestore.collection('jobs').valueChanges();

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
  onGridReady(params: any) {
    console.log('grid ready');
    // console.log(this.gridOptions.api.getDisplayedRowCount());
  }

  onRowClicked(event: any) { console.log('row', event); }
  onCellClicked(event: any) { console.log('cell', event); }
  onSelectionChanged(event: any) { console.log("selection", event); }
}
