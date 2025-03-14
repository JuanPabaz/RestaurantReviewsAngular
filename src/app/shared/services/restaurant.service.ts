import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantResponse } from '../../interfaces/restaurant-response';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseUrl = 'http://localhost:8080/api/1.0';

  constructor(private http:HttpClient) { }

  getAllRestaurants():Observable<RestaurantResponse[]>{
    return this.http.get<RestaurantResponse[]>(`${this.baseUrl}/restaurant`);
  }

  
}
