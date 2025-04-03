import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteResponse } from '../../interfaces/favorite-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/1.0/user';

  constructor(private http: HttpClient) { }

  addToFavorites(idRestaurant: number, idUser: number):Observable<FavoriteResponse>{
    return this.http.post<FavoriteResponse>(`${this.baseUrl}/favorites?idRestaurant=${idRestaurant}&idUser=${idUser}`, null);
  }
}
