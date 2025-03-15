import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResquest } from '../../interfaces/auth-request';
import { AuthResponse } from '../../interfaces/auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/1.0';

  constructor(private http: HttpClient) { }

  login(authRequest: AuthResquest):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`,authRequest);
  }
}
