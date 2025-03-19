import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ReviewsService } from '../../../shared/services/reviews.service';
import { ReviewRequest } from '../../../interfaces/review-request';
import { CommonModule } from '@angular/common';
import { RestaurantResponse } from '../../../interfaces/restaurant-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-review',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-review.component.html',
  styleUrl: './create-review.component.css'
})
export default class CreateReviewComponent {
  url:string | ArrayBuffer | null = ''; 
  stars = [1, 2, 3, 4, 5];
  imagePreviews: string[] = [];
  selectedFiles: File[] = [];
  selectedRestaurant: RestaurantResponse = {
    idRestaurant: 0,
    restuarantName: '',
    address: '',
    phoneNumber: '',
    idCategory: 0,
    pageLink: '',
    images: [],
  };
  reviewRequest: ReviewRequest = {
    place: -1,
    food: -1,
    service: -1,
    drinks: -1,
    music: -1,
    menu: -1,
    waitingTime: -1,
    ambient: -1,
    comments: '',
    idRestaurant: 0,
    idUser: 0,
    images: [],
  }
  constructor(
    private review_service: ReviewsService,
    private router: Router){
    if (router.getCurrentNavigation()?.extras.state){
      this.selectedRestaurant = router.getCurrentNavigation()?.extras.state!['restaurant'];
    }
  }

  onSubmit(reviewForm:NgForm){
    let reviewRequest = reviewForm.form.value;
    const userId = JSON.parse(sessionStorage.getItem('user')!).userId;
    const restaurantId = this.selectedRestaurant.idRestaurant;
    reviewRequest = {...reviewRequest, idUser: userId, idRestaurant: restaurantId};
    this.review_service.createReview(reviewRequest, this.selectedFiles).subscribe({
      next: reviewResponse => {
        console.log(reviewResponse);
      },
      error: err => {
        console.log(err.error);
      }
    })
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      Array.from(input.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviews.push(reader.result as string);
        };
        reader.readAsDataURL(file);
        this.selectedFiles.push(file);
      });
    }
  }

  removeImage(index: number) {
    this.imagePreviews.splice(index, 1);
    this.selectedFiles.splice(index, 1);
  }
}
