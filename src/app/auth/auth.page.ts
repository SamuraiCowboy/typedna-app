import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {}

  isLoading = false;
  isLogin = true;

  ngOnInit() {}

  // onLogin() {
  //   this.authService.login();
  //   this.router.navigateByUrl('/places/tabs/discover');
  // }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.authenticate(email, password);
    form.reset();
  }

  authenticate(email: string, password: string) {
    this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then(loadingEl => {
        loadingEl.present();


          let resp:boolean = this.authService.login(email, password);
          if (resp == true) {
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/places/tabs/discover');
          } else {
            loadingEl.dismiss();
            this.showAlert("You are not authorised to use this app. Please contact fxs95 to get access.");
          }
       
       
      });
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication failed',
        message: message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }
}
