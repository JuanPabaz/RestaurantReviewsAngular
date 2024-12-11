import { Component } from '@angular/core';
import { RestaurantResponseDTO } from '../../models/restaurant-response-dto.models';
import { CommonModule } from '@angular/common';
import { RestaurantService } from '../../services/restaurant.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurant-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {
  restaurantList: RestaurantResponseDTO[] = [];
  isModalOpen: boolean = false;
  selectedRestaurant: RestaurantResponseDTO | null = null;
  isDetailsModalOpen = false;
  currentImageIndex = 0;

  constructor(private restaurantService: RestaurantService){}

  ngOnInit(){
    this.getAllRestaurants();
  }

  getAllRestaurants(){
    this.restaurantService.getAllRestaurants()
    .subscribe({
      next: (response) => {
        this.restaurantList = response;
      },
      error: (error) => {
        console.log("Error:" + error.error.message);
      }
    });
  }

  openModal(restaurante: RestaurantResponseDTO): void {
    console.log("modal")
    this.selectedRestaurant = restaurante;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedRestaurant = null;
  }

  openFullDetails(restaurante: any): void {
    this.selectedRestaurant = restaurante;
    this.currentImageIndex = 0;
    this.isDetailsModalOpen = true;
  }
  
  closeDetailsModal(): void {
    this.isDetailsModalOpen = false;
    this.selectedRestaurant = null;
  }
  
  nextImage(): void {
    if (this.selectedRestaurant?.images) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedRestaurant.images.length;
    }
  }
  
  prevImage(): void {
    if (this.selectedRestaurant?.images) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.selectedRestaurant.images.length) % this.selectedRestaurant.images.length;
    }
  }
}
