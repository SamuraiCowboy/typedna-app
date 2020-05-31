import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  constructor(private http: HttpClient,private firestore: AngularFirestore) {}
  getPlaces() {
    return this.firestore.collection('jobsSmall').valueChanges();
    // return this.http.get('assets/apiData.json');
  }

}
