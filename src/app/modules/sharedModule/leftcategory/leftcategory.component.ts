import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-leftcategory',
  templateUrl: './leftcategory.component.html',
  styleUrl: './leftcategory.component.css'
})
export class LeftcategoryComponent {
  /**
   *
   */
  constructor() {
    
    
  }
  categories = [
    { categoryName: 'Markalar' },
    { categoryName: 'Arabalar' },
    { categoryName: 'Renkler' },
    { categoryName: 'Müşteriler' },
    { categoryName: 'Kiralamalar' }
  ];
  @Output() selectedCategory: any;
  @Output() categorySelected = new EventEmitter<string>();
  selectCategory(category: any) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
  
}
