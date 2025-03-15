import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ReviewsService } from '../../shared/services/reviews.service';
import { ReviewRequest } from '../../interfaces/review-request';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-review',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-review.component.html',
  styleUrl: './create-review.component.css'
})
export default class CreateReviewComponent {
  stars = [1, 2, 3, 4, 5];
  reviewRequest: ReviewRequest = {
    place: -1,
    food: -1,
    service: -1,
    drinks: -1,
    music: -1,
    menu: -1,
    waitingTime: -1,
    comments: '',
    idRestaurant: 0,
    idUser: 0,
    images: [],
  }
  constructor(private review_service: ReviewsService){

  }

  onSubmit(reviewForm:NgForm){
    debugger
    let reviewRequest = reviewForm.form.value;
    const userId = JSON.parse(sessionStorage.getItem('user')!).userId;
    reviewRequest = {...reviewRequest, idUser: userId}; 
    this.review_service.createReview(reviewRequest).subscribe({
      next: reviewResponse => {
        console.log(reviewResponse);
      },
      error: err => {
        console.log(err.error);
      }
    })
  }
}
