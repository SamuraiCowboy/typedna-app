import { Component, OnInit } from '@angular/core';

import { PlacesService } from '../dashboard.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class OffersPage implements OnInit {


  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    // this.offers = this.placesService.places;
  }

}
