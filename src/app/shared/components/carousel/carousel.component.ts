import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ImageResponse } from '../../../interfaces/image-response';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{
  @Input() carouselImages: ImageResponse[] = [];
  @Input() indicators = true;
  selectedIndex = 0;

  ngOnInit(): void {
  }

  selectImage(i:number):void{
    this.selectedIndex = i;
  }

}
