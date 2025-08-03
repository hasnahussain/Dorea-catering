import { ProductCategory } from "./ProductCategory";

export interface Product {
    id: number;
    name: string;
    image: string;
    category: ProductCategory;
    subcategory: string;
  }
  