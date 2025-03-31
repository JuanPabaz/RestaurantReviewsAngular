import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  imports: [CommonModule],
  templateUrl: './rating-stars.component.html',
  styleUrl: './rating-stars.component.css'
})
export class RatingStarsComponent {
  @Input() score: number = 0;

  getStars(){
    const roundedScore = Math.round(this.score); 
    return Array(5).fill(false).map((_, i) => i < roundedScore);
  }
}
