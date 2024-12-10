import { Component } from '@angular/core';
import { RestaurantResponseDTO } from '../../models/restaurant-response-dto.models';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  imports: [CommonModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {
  restaurantList: RestaurantResponseDTO[] = [];

  constructor(private restaurantService: RestaurantService){

  }

  ngOnInit(){
    this.getAllRestaurants()
  }

  getAllRestaurants(){
    this.restaurantService.getAllRestaurants()
    .subscribe({
      next:(response) => {
        this.restaurantList = response;
      },
      error:(error) => {
        console.log("Error:" + error.error.message)
      }
    })
  }
}
