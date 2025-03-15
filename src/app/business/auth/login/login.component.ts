import { Component } from '@angular/core';
import { AuthResquest } from '../../../interfaces/auth-request';
import { AuthService } from '../../../shared/services/auth.service';
import { AuthResponse } from '../../../interfaces/auth-response';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  authRequest: AuthResquest = { username: '', password: '' };
  authResponse!: AuthResponse; 

  constructor(
    private auth_service: AuthService,
    private router: Router
  ){}

  login(authRequest: AuthResquest){
    this.auth_service.login(authRequest).subscribe({
      next: authResponse => {
        debugger
        this.authResponse = authResponse;
        console.log(this.authResponse);
        const token = authResponse.accessToken;
        const refreshToken = authResponse.refreshToken;
        const payload = this.auth_service.getPayload(token);

        const user = { username: payload.sub };
        const login = {
          isAuth: true,
          username: user.username,
          role: authResponse.role
        }
        this.auth_service.token = token;
        this.auth_service.refreshToken = refreshToken;
        this.auth_service.user = login;
        this.router.navigate(['/restaurant-list']);
      },
      error: err => {
        console.log(err.error)
      }
    })
  }

  onSubmit(loginForm:NgForm){
    this.authRequest = loginForm.form.value;
    this.login(this.authRequest);
  }
}
