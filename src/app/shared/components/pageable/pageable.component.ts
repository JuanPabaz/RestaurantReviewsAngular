import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Pageable } from '../../../interfaces/pageable';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pageable',
  imports: [CommonModule],
  templateUrl: './pageable.component.html',
  styleUrl: './pageable.component.css'
})
export class PageableComponent implements OnChanges{
  @Input() page!: Pageable<any>;
  @Output() changePageEventEmitter: EventEmitter<number> = new EventEmitter();
  totalPages: number[] = [];
  

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['page'] && this.page) {
      this.pageNumbers();
    }
  }

  pageNumbers() {
    this.totalPages = Array.from({ length: this.page.totalPages }, (_, i) => i + 1);
  }

  changePage(page:number){
    this.changePageEventEmitter.emit(page);
  }
  
}
