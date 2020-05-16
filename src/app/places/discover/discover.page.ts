import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss']
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  columnDefs = [
    {headerName: 'Job Id', field: 'id', sortable: true, filter: true,checkboxSelection:true},
    {headerName: 'Job Name', field: 'name', sortable: true, filter: true},
    {headerName: 'Verifier', field: 'verifier', sortable: true, filter: true},
    {headerName: 'Start Time', field: 'startTime', sortable: true, filter: true},
    {headerName: 'Status', field: 'status', sortable: true, filter: true,  cellClass: function(params) {
      return params.value === 'Canceled' ? 'rag-green' : 'rag-amber';
    }}
];
  rowData = [
      { id: '1', name: 'DataFlow', verifier: 'Credit Karma', startTime: '12 Nov 2020 13:59:90' ,status: 'In progress'},
      { id: '2', name: 'DataFlow', verifier: 'Credit Karma', startTime: '12 Nov 2020 13:59:90' ,status: 'Aborted'},
      { id: '3', name: 'DataFlow', verifier: 'Credit Karma', startTime: '12 Nov 2020 13:59:90' ,status: 'Canceled'},
      { id: '4', name: 'DataFlow', verifier: 'Credit Karma', startTime: '12 Nov 2020 13:59:90' ,status: 'Aborted'},
      { id: '5', name: 'DataFlow', verifier: 'Credit Karma', startTime: '12 Nov 2020 13:59:90' ,status: 'Canceled'},
  
  ];

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }
}
