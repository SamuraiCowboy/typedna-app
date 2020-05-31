import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {


 
  constructor(private http: HttpClient) {}


  getPlaces() {
    // return [...this._places];
    return this.http.get('assets/apiData.json');
  }

}
