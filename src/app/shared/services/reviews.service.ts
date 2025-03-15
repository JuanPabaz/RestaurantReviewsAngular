import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReviewRequest } from '../../interfaces/review-request';
import { Observable } from 'rxjs';
import { ReviewResponse } from '../../interfaces/review-response';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private baseUrl = 'http://localhost:8080/api/1.0/review';

  constructor(private http: HttpClient) { }

  createReview(reviewRequest: ReviewRequest):Observable<ReviewResponse>{
    return this.http.post<ReviewResponse>(`${this.baseUrl}`,reviewRequest);
  }
}
