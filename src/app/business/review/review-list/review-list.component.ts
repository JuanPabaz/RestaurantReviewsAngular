import { Component, OnInit } from '@angular/core';
import { ReviewResponse } from '../../../interfaces/review-response';
import { ReviewsService } from '../../../shared/services/reviews.service';
import { Pageable } from '../../../interfaces/pageable';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-list',
  imports: [CarouselComponent, CommonModule, FormsModule],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css'
})
export default class ReviewListComponent implements OnInit{
  searchItem:string = '';
  dots = [1,2,3];
  reviewPageable!: Pageable<ReviewResponse[]>;
  reviewList: ReviewResponse[] = [];

  constructor(private review_service: ReviewsService){

  }

  ngOnInit(): void {
    this.getAllReviews(1);
  }

  getAllReviews(page: number){
    this.review_service.getAllRestaurants(page).subscribe({
      next: reviews => {
        this.reviewPageable = reviews;
        this.reviewList = reviews.content;
      },
      error: err => {
        console.log(err.error);
      }
    })
  }

  filterReview() {
    if (this.searchItem.trim()) {
      this.review_service.filterReviews(1, this.searchItem).subscribe({
        next: reviews => {
          this.reviewPageable = reviews;
          this.reviewList = reviews.content;
          console.log(this.reviewList);
        },
        error: err => {
          console.log(err.error);
        }
      });
    } else {
      this.getAllReviews(1);
    }
  }

  getStars(score: number): boolean[] {
    const roundedScore = Math.round(score); 
    return Array(5).fill(false).map((_, i) => i < roundedScore);
  }


}
