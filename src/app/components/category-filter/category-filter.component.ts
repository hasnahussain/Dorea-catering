import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EVENTS } from '../../data/events';
import { ProductCategory } from '../../data/ProductCategory';
import { CommonModule } from '@angular/common';
import { PRODUCT_LIST } from '../../data/product-list';
import { Product } from '../../data/product';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../core/cart.service';
import { ProductService } from '../../core/product.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CartItem } from '../../data/cart-item';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css'
})
export class CategoryFilterComponent {

  @Input() subcategories: string[] | null = null;

  @Output() categoryChange = new EventEmitter<ProductCategory>();

  @Output() subcategoryChange = new EventEmitter<string>();

  selectedCategory : ProductCategory = 'Catering';
  selectedSubcategory = '';

  categories: { key: ProductCategory; name: string }[] = [
    { key: 'Catering', name: 'Catering' },
    { key: 'Decoration', name: 'Decoration' },
    { key: 'Audio & Music', name: 'Audio & Music' },
    { key: 'Hosts & Beats', name: 'Hosts & Beats' },
    { key: 'Event Enhancers', name: 'Event Enhancers' },

  ];

  selectCategory(category: ProductCategory): void {
    this.selectedCategory = category;
    this.selectedSubcategory = '';
    this.categoryChange.emit(category);
  }
  

  selectSubcategory(subcategory: string): void {
    this.selectedSubcategory = subcategory;
    this.subcategoryChange.emit(subcategory);
  }
}
