import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private auth_service: AuthService,
    private router: Router)
    {}

  get user(){
    return this.auth_service.user;
  }

  logoutHandler(){
    this.auth_service.logOut();
    this.router.navigate(['/restaurant-list'])
  }

  loginHandler(){
    this.router.navigate(['/login']);
  }

  registerHandler(){
    this.router.navigate(['/register']);
  }
}
