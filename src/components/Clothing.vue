<template>
  <v-container fluid>
  <v-row>
    <v-col cols="12" sm="6" md="4" lg="3" v-for="product in products" :key="product.id">
      <StoreItem :product="product" />
    </v-col>
  </v-row>
</v-container>
</template>

<script lang="ts" setup>
import StoreItem from './StoreItem.vue';
import { onMounted } from 'vue';
import { useProductStore } from '../stores/ProductStore';
import { ref } from "vue";
import { ProductDoc } from '../types/product';

const productStore = useProductStore();
const products = ref<ProductDoc[]>([]);

onMounted(() => {
productStore.filterByCategory('Clothing');
products.value = productStore.products;
});
</script>