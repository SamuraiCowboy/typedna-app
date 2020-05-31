import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';


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
  isEnabled:boolean

  agInit(params): void {
    this.data = params.value;
  }

  onClick(e){
    console.log(e);
    
  }



}