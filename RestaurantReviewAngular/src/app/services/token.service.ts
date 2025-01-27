import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private _isLoggedIn = signal(this.loggedIn === 'true');

  set token(token: string) {
    localStorage.setItem('token', token);
  }

  get token(): string {
    return localStorage.getItem('token') as string;
  }

  set loggedIn(isLoggedIn: string) {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    this._isLoggedIn.set(isLoggedIn === 'true');
  }

  get loggedIn(): string {
    return localStorage.getItem('isLoggedIn') as string;
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }
}
