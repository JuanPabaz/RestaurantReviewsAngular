import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantResponse } from '../../interfaces/restaurant-response';
import { Pageable } from '../../interfaces/pageable';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseUrl = 'http://localhost:8080/api/1.0';

  constructor(private http:HttpClient) { }

  getAllRestaurants(page:number):Observable<Pageable<RestaurantResponse[]>>{
    return this.http.get<Pageable<RestaurantResponse[]>>(`${this.baseUrl}/restaurant?page=${page}`);
  }

  
}
