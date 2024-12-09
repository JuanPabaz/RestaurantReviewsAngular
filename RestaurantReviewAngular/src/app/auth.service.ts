import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.models';
import { Observable } from 'rxjs';
import { UserResponseDTO } from './user-response-dto.models';
import { AuthResponseDTO } from './auth-response-dto.models';
import { AuthRequestDTO } from './auth-request-dto.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/1.0/auth'
  
  constructor(private http:HttpClient) { }

  register(user: User): Observable<UserResponseDTO>{
    return this.http.post<UserResponseDTO>(`${this.baseUrl}/register`,user);
  }

  login(AuthRequest: AuthRequestDTO): Observable<AuthResponseDTO>{
    return this.http.post<AuthResponseDTO>(`${this.baseUrl}/login`, AuthRequest)
  }
}
