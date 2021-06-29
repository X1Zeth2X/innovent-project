// Import the Vehicles JSON file
import { Car } from "@/store/types";
import data from "./vehicles.json";

// Create a new Vehicles Mock API
class VehiclesAPI {
  getVehicles = (start: number, end: number): Promise<Car[]> => {
    return new Promise((resolve) => {
      // Simulate network (250ms) delay
      const requestedVehicles = data.vehicles.slice(start, end);
      setTimeout(() => resolve(requestedVehicles), 250);
    });
  };

  // Get a specific vehicle by its ID
  getVehicle = (id: number): Promise<Car> => {
    // Return a new promise with setTimeout to simulate network delay.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          // Filter vehicles and return the specific vehicle's data.
          const vehicle = data.vehicles.filter(
            (vehicle) => vehicle.id == id
          )[0]; // Get the `0` index since IDs are unique anyways.
          resolve(vehicle); // Resolve the promise with the Vehicle's data.
        } catch (error) {
          reject(error);
        }
      }, 500);
    });
  };
}

export default VehiclesAPI;
