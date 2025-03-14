import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../shared/services/restaurant.service';
import { RestaurantResponse } from '../../../interfaces/restaurant-response';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { Pageable } from '../../../interfaces/pageable';
import { PageableComponent } from '../../../shared/components/pageable/pageable.component';

@Component({
  selector: 'app-restaurant-list',
  imports: [CarouselComponent, PageableComponent],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export default class RestaurantListComponent implements OnInit{
  restaurantList: RestaurantResponse[] = [];
  restaurantListPageable!: Pageable<RestaurantResponse[]>;

  constructor(private _restaurant_service: RestaurantService){

  }

  ngOnInit(): void {
    this._restaurant_service.getAllRestaurants(1).subscribe({
      next: restaurant => {
        this.restaurantListPageable = restaurant;
        this.restaurantList = restaurant.content;
      },
      error: err => {
        console.log(err.error);
      }
    })
  }

  changePage(page:number){
    this._restaurant_service.getAllRestaurants(page).subscribe({
      next: restaurant => {
        this.restaurantListPageable = restaurant;
        this.restaurantList = restaurant.content;
      },
      error: err => {
        console.log(err.error);
      }
    })
  }


}
