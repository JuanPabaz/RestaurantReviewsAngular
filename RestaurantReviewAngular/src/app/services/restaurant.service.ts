import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantResponseDTO } from '../models/restaurant-response-dto.models';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private baseUrl = 'http://localhost:8080/api/1.0/restaurant'
  
  constructor(private http:HttpClient) { }

  getAllRestaurants():Observable<RestaurantResponseDTO[]>{
    return this.http.get<RestaurantResponseDTO[]>(`${this.baseUrl}`);
  }
}
