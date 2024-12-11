import { Component } from '@angular/core';
import { AuthRequestDTO } from '../../models/auth-request-dto.models';
import { AuthResponseDTO } from '../../models/auth-response-dto.models';
import { Role } from '../../models/user.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authRequest: AuthRequestDTO = {
    username: '',
    password: ''
  };
  authResponse: AuthResponseDTO = {
    accessToken: '',
    refreshToken: '',
    role: Role.NONE
  }

  constructor(private authService: AuthService,
    private router: Router
  ){

  }

  login(){
    this.authService.login(this.authRequest)
    .subscribe({
      next:(response) => {
        this.authResponse = response;
        this.router.navigate(["/"])
      },
      error:(error) => {
        console.log("Error:" + error.error.message)
      }
    })
  }
}
