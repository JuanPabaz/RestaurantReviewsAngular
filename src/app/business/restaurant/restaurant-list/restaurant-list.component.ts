import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../shared/services/restaurant.service';
import { RestaurantResponse } from '../../../interfaces/restaurant-response';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { Pageable } from '../../../interfaces/pageable';
import { PageableComponent } from '../../../shared/components/pageable/pageable.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { CategoryResponse } from '../../../interfaces/category-response';

@Component({
  selector: 'app-restaurant-list',
  imports: [CarouselComponent, PageableComponent],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export default class RestaurantListComponent implements OnInit{
  restaurantList: RestaurantResponse[] = [];
  restaurantListPageable!: Pageable<RestaurantResponse[]>;
  isNotAuthModal = false;
  category: CategoryResponse = {
        idCategory: 0,
        category: '',
        description: '',
        idImage: 0
  }
  emptyRestaurant: RestaurantResponse = {
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
    restaurantFeatures: [],
  }

  constructor(private _restaurant_service: RestaurantService,
    private auth_service: AuthService,
    private router: Router
  ){

  }

  get user(){
    return this.auth_service.user;
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

  closeModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.isNotAuthModal = false;
    }
  }

  changePage(page:number){
    this.getAllRestaurants(page);
  }

  validateCreateReview(restaurant: RestaurantResponse){
    if (this.user.isAuth){
      this.router.navigate(['/create-review'],{state:{restaurant}})
    }else{
      this.isNotAuthModal = true;
    }
  }

  seeMoreRestaurant(restaurant: RestaurantResponse){
    this.router.navigate(['/restaurant-detail'],{state:{restaurant}})
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
