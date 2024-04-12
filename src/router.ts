import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "./components/Home.vue";
import ClothingView from "./components/Clothing.vue";
import ElectronicsView from "./components/Electronics.vue";
import GroceriesView from "./components/Groceries.vue";
import BestSellerView from "./components/BestSeller.vue";
const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: HomeView,
  },
  {
    path: "/clothing",
    name: "clothing",
    component: ClothingView, 
  },
  {
    path: "/electronics",
    name: "electronics",
    component: ElectronicsView, 
  },
  {
    path: "/groceries",
    name: "groceries",
    component: GroceriesView, 
  },
  {
    path: "/bestseller",
    name: "bestseller",
    component: BestSellerView, 
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;