import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RegisterRequest } from '../../../interfaces/register-request';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent {
  registerRequest: RegisterRequest = {
    username: '',
    password: '',
    fullName: '',
    role: ''
  }

  constructor(
    private auth_service: AuthService,
    private router: Router){

  }

  onSubmit(registerForm: NgForm){

  }
}
