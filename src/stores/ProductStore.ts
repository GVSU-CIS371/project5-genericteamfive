import { defineStore } from "pinia";
import { ProductDoc } from "../types/product";
import { initProducts } from "../data-init";

export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    products: [] as ProductDoc[],
  }),
  actions: {
    init() {
      // Initialize the products with data from data-init.ts
      this.products = initProducts;
    },
    filterByCategory(category: string) {
      // Filter products by category
      return this.products.filter(product => product.data.category === category);
    },
    filterByRating(minRating: number) {
      // Filter products with ratings above minRating
      return this.products.filter(product => product.data.rating >= minRating);
    },
  },
});
