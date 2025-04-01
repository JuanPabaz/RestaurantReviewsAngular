import { Component } from '@angular/core';
import { RestaurantResponse } from '../../../interfaces/restaurant-response';
import { Router } from '@angular/router';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { CategoryResponse } from '../../../interfaces/category-response';
import { CommonModule } from '@angular/common';
import { RatingStarsComponent } from '../../../shared/components/rating-stars/rating-stars.component';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-restaurant-detail',
  imports: [CarouselComponent, CommonModule, RatingStarsComponent],
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.css'
})
export default class RestaurantDetailComponent {
  isNotAuthModal = false;
  category: CategoryResponse = {
    idCategory: 0,
    category: '',
    description: '',
    idImage: 0
  }
  selectedRestaurant: RestaurantResponse = {
    idRestaurant: 0,
    restuarantName: '',
    address: '',
    restuarantDescription: '',
    avgRating: 0,
    reviewCount: 0,
    phoneNumber: '',
    category: this.category,
    avgPrice: 0,
    pageLink: '',
    images: [],
  };

  constructor(private router: Router,
    private auth_service: AuthService,
  ){
    if (router.getCurrentNavigation()?.extras.state){
      this.selectedRestaurant = router.getCurrentNavigation()?.extras.state!['restaurant'];
    }
  }

  get user(){
    return this.auth_service.user;
  }

  validateCreateReview(restaurant: RestaurantResponse){
    if (this.user.isAuth){
      this.router.navigate(['/create-review'],{state:{restaurant}})
    }else{
      this.isNotAuthModal = true;
    }
  }

  closeModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.isNotAuthModal = false;
    }
  }

  navigateToLogin() {
    this.isNotAuthModal = false;
    this.router.navigate(['/login']);
  }

  navigateToSignup() {
    this.isNotAuthModal = false;
    this.router.navigate(['/signup']);
  }
}
