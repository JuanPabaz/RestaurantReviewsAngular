import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponseDTO } from '../models/user-response-dto.models';
import { RegisterRequestDTO } from '../models/register-request-dto.models';
import { AuthRequestDTO } from '../models/auth-request-dto.models';
import { AuthResponseDTO } from '../models/auth-response-dto.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/1.0/auth'
  
  constructor(private http:HttpClient) { }

  register(registerRequest: RegisterRequestDTO): Observable<UserResponseDTO>{
    return this.http.post<UserResponseDTO>(`${this.baseUrl}/register`,registerRequest);
  }

  login(AuthRequest: AuthRequestDTO): Observable<AuthResponseDTO>{
    return this.http.post<AuthResponseDTO>(`${this.baseUrl}/login`, AuthRequest)
  }
}
