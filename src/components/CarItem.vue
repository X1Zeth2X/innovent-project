<template>
  <v-card outlined hover class="rounded-xl" @click="showCarDetails()">
    <v-row justify="space-between" align="start">
      <v-col md="4">
        <v-img
          :src="car.thumbnail"
          alt="Car Thumbnail"
          contain
          style="border-radius: 1em 0 0 1em"
        ></v-img>
      </v-col>

      <v-col md="8">
        <v-card-title> {{ car.name }} {{ car.model }} </v-card-title>
        Details
        {{ car }}
      </v-col>
    </v-row>
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

  private showCarDetails = () => {
    console.log(this.car);
    alert(`Show car details ${this.car}`);
  };
}
</script>
