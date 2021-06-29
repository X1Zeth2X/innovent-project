<template>
  <v-card outlined hover class="rounded-xl mb-5">
    <v-img :src="car.thumbnail" contain alt="Car Thumbnail"></v-img>

    <v-card-title class="text-h4 font-weight-black">
      {{ car.name }}</v-card-title
    >
    <v-card-subtitle class="text-h5"
      >{{ car.model }} ({{ car.year }})</v-card-subtitle
    >

    <v-card-text>
      <span class="font-weight-bold">Price:</span>
      {{ car.price }} AED
    </v-card-text>

    <v-card-actions>
      <v-rating
        :value="car.rating"
        :length="5"
        readonly
        color="orange"
        background-color="orange"
      ></v-rating>

      <v-spacer></v-spacer>

      <v-btn outlined large rounded @click="showCarDetails()">More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Car } from "@/store/types";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class CarItem extends Vue {
  @Prop() car!: Car;

  private showCarDetails() {
    this.$router.push(`/details/${this.car.id}`);
  }
}
</script>
