import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  constructor(private http: HttpClient,private firestore: AngularFirestore) {}
  getJobs() {
    // return this.firestore.collection('jobsSmall').valueChanges({ idField: 'documentId' });
    return this.http.get('assets/apiData.json');
  }

  updateJob(job){
    console.log("Job :" , job);
    this.firestore.doc(`jobsSmall/${job.documentId}`).update({
      status : 'Stopped',
      subStatus : 'Stopped',
      stoppable: false
    })
  }

}
