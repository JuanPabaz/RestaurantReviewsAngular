import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../shared/services/restaurant.service';
import { RestaurantResponse } from '../../../interfaces/restaurant-response';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-restaurant-list',
  imports: [],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export default class RestaurantListComponent implements OnInit{
  restaurantList: RestaurantResponse[] = [];

  constructor(private _restaurant_service: RestaurantService){

  }

  ngOnInit(): void {
    this._restaurant_service.getAllRestaurants().subscribe({
      next: restaurant => {
        this.restaurantList = restaurant;
        this.restaurantList.map(rest => {
          rest.images.map(images => {

          })
        })
      },
      error: err => {
        console.log(err.error);
      }
    })
  }


}
