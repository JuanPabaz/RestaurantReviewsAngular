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
    this.registerRequest = registerForm.form.value;
    this.register(this.registerRequest);
  }

  register(registerRequest: RegisterRequest){
    this.auth_service.register(registerRequest).subscribe({
      next: register => {
        this.router.navigate(['/login']);
      },
      error: err => {
        console.log(err.error);
      }
    })
  }
}
