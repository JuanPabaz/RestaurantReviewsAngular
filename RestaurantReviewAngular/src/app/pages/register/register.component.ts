import { Component } from '@angular/core';
import { Role, User } from '../../models/user.models';
import { RegisterRequestDTO } from '../../models/register-request-dto.models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserResponseDTO } from '../../models/user-response-dto.models';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerRequest: RegisterRequestDTO = {
    nombreCompleto: '',
    username: '',
    password: '',
    role: Role.NONE
  }

  userResponse: UserResponseDTO = {
    idUser: 0,
    fullName: '',
    role: Role.NONE,
    username: ''
  }

  constructor(private authService :AuthService){

  }

  register(){
    this.authService.register(this.registerRequest)
    .subscribe({
      next:(response) => {
        this.userResponse = response;
      },
      error:(error) => {
        console.log("Error: " + error.error.message)
      }
    })
  }
  
}
