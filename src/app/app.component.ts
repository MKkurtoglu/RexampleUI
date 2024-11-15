import { Component, input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RExampleAngular';
   selectedCategory: string = '';

  onCategorySelected(category: string) {
    this.selectedCategory = category;}
}
