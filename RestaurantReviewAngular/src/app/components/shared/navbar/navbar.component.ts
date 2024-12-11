import { Component, inject, Input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn = signal(inject(TokenService).loggedIn);
  constructor(private router: Router){

  }

  ngOnInit(){
    this.isLoggedIn = signal(inject(TokenService).loggedIn);
  }

  login(){
    this.router.navigate(['/login']);
  }

  logOut(){
    debugger
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
  }
}
