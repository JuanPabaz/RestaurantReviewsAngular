import { Component } from '@angular/core';
import { RestaurantResponse } from '../../../interfaces/restaurant-response';
import { Router } from '@angular/router';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { CategoryResponse } from '../../../interfaces/category-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-detail',
  imports: [CarouselComponent, CommonModule],
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.css'
})
export default class RestaurantDetailComponent {
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

  constructor(private router: Router){
    if (router.getCurrentNavigation()?.extras.state){
      this.selectedRestaurant = router.getCurrentNavigation()?.extras.state!['restaurant'];
    }
  }
}
