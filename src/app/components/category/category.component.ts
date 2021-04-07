import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: string[] = ['car', 'brand', 'color', 'rent', 'user'];

  currentCategory: string = 'Car';

  constructor() {}

  ngOnInit(): void {}

  setCurrentCategory(category: string) {
    this.currentCategory = category;
  }

  getCurrentCategory(category: string) {
    if (category == this.currentCategory) {
      return 'nav-link active';
    } else {
      return 'nav-link';
    }
  }
}
