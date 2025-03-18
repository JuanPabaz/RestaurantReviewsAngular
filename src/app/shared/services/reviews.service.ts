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

  createReview(reviewRequest: ReviewRequest, images: File[]):Observable<ReviewResponse>{
    debugger
    const formData = new FormData();
    formData.append('review', JSON.stringify(reviewRequest));

    if (images && images.length > 0) {
      images.forEach((image, index) => {
        formData.append('images', image);
      });
    }
    return this.http.post<ReviewResponse>(`${this.baseUrl}`,formData);
  }
}
