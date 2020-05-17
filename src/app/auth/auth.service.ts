import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;

  get userIsAuthenticated() {
    // return this._userIsAuthenticated;
    return true;
  }

  constructor() {}

  login(email: string, password: string) {
    if(email == 'twnboc' && password == 'twnboc123')
    this._userIsAuthenticated = true;
    return this._userIsAuthenticated;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
