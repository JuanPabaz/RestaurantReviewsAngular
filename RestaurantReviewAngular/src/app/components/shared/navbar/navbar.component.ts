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
  isLoggedIn = inject(TokenService).isLoggedIn();

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnChange(){
    
  }

  login() {
    debugger
    this.router.navigate(['/login']);
  }

  logOut() {
    debugger
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    this.tokenService.loggedIn = 'false'; // Cambia el estado reactivo
    this.router.navigate(['/']);
  }
}
