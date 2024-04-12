<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" 
        v-for="product in bestSellers"
        :key="product.id">
        <StoreItem :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import StoreItem from './StoreItem.vue';
import { useProductStore } from '../stores/ProductStore';

const productStore = useProductStore();

const bestSellers = computed(() => 
productStore.filterByRating(4.5));
</script>