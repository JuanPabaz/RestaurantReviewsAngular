import { Component } from '@angular/core';
import { AuthRequestDTO } from '../../models/auth-request-dto.models';
import { AuthService } from '../../auth.service';
import { AuthResponseDTO } from '../../models/auth-response-dto.models';
import { Role } from '../../models/user.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private authService: AuthService){

  }

  login(){
    debugger
    this.authService.login(this.authRequest)
    .subscribe({
      next:(response) => {
        this.authResponse = response;
      },
      error:(error) => {
        console.log("Error:" + error.error.message)
      }
    })
  }
}
