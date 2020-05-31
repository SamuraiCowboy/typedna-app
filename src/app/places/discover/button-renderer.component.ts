import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-button-renderer',
  template: `
  <div text-center>
    <ion-button fill="outline" color="danger" *ngIf="data" type="button" (click)="onClick($event)"><ion-icon name="stop-circle-outline"></ion-icon> &nbsp; Stop</ion-button>
    <ion-label *ngIf="!data" >No</ion-label>
</div>
    `
})

export class ButtonRendererComponent implements OnInit {

  params;
  data: string;
  constructor(private alertCtrl: AlertController){

  }

  agInit(params): void {
    this.data = params.value;
    this.params = params;
  }

  onClick(e){
    console.log("Click event: ",e);
    console.log("Data: ",this.params);
    this.presentAlertConfirm(this.params.data.org,this.params.data.jenkinsJobId);
    
  }




  async presentAlertConfirm(org,jenkinsId) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Stop!',
      message: 'Are you sure you want to stop job for <strong>' + org + '</strong>? Jenkins job : ' + jenkinsId,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}