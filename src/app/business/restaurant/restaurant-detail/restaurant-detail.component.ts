import { Component } from '@angular/core';
import { RestaurantResponse } from '../../../interfaces/restaurant-response';
import { Router } from '@angular/router';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-restaurant-detail',
  imports: [CarouselComponent],
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.css'
})
export default class RestaurantDetailComponent {
  selectedRestaurant: RestaurantResponse = {
    idRestaurant: 0,
    restuarantName: '',
    address: '',
    phoneNumber: '',
    idCategory: 0,
    pageLink: '',
    images: [],
  };

  constructor(private router: Router){
    if (router.getCurrentNavigation()?.extras.state){
      this.selectedRestaurant = router.getCurrentNavigation()?.extras.state!['restaurant'];
    }
  }
}
