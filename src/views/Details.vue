<template>
  <v-container id="detail">
    <v-card max-width="800" class="mx-auto">
      <v-btn icon class="pa-3" x-large @click="$router.go(-1)">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <v-img :src="vehicleData.thumbnail"></v-img>

      <v-card-title class="text-h4">
        {{ vehicleData.model }}
      </v-card-title>

      <v-card-subtitle class="text-h6">
        {{ vehicleData.name }}
      </v-card-subtitle>

      <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quisquam
        fuga asperiores, necessitatibus est quod reprehenderit, eos et
        praesentium hic aut ipsum voluptatibus velit totam labore molestias non
        magni corrupti.

        <div class="text-h6">Price: {{ vehicleData.price }} AED</div>
      </v-card-text>

      <v-card-actions>
        <v-rating
          :value="vehicleData.rating"
          :length="5"
          readonly
          color="orange"
          background-color="orange"
        ></v-rating>

        <v-spacer></v-spacer>

        <v-btn icon fab :color="liked ? 'red' : ''" @click="liked = !liked">
          <v-icon>
            {{ liked ? "mdi-heart" : "mdi-heart-outline" }}
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import VehiclesAPI from "@/mock-api/vehicles-api";
import { Car } from "@/store/types";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Detail extends Vue {
  private vehicleID: number | null = null;

  private vehicleData = {};
  private liked = false;

  // Vue `created` lifecycle
  private async created() {
    // Get route params
    this.vehicleID = parseInt(this.$route.params.id);

    // Hackish method, in a real product this should be talking with a service / more vuex actions.
    const vehicleAPI = new VehiclesAPI();
    const vehicle: Car = await vehicleAPI.getVehicle(this.vehicleID);

    if (vehicle === undefined) {
      this.$router.push("/404");
    }

    this.vehicleData = vehicle;
  }
}
</script>
