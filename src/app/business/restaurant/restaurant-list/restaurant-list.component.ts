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
  emptyRestaurant: RestaurantResponse = {
    idRestaurant: 0,
    restuarantName: '',
    address: '',
    phoneNumber: '',
    idCategory: 0,
    pageLink: '',
    images: [],
  }

  constructor(private _restaurant_service: RestaurantService){

  }

  ngOnInit(): void {
    this.getAllRestaurants(1);
  }

  getAllRestaurants(page: number){
    this._restaurant_service.getAllRestaurants(page).subscribe({
      next: restaurant => {
        this.restaurantListPageable = restaurant;
        this.restaurantList = restaurant.content;
        if (this.restaurantList.length < 6){
          for (let i = this.restaurantList.length; i < 6; i++){
            this.restaurantList.push(this.emptyRestaurant);
          }
        }
      },
      error: err => {
        console.log(err.error);
      }
    });
  }

  changePage(page:number){
    this.getAllRestaurants(page);
  }


}
