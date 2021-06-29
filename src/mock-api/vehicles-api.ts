// Import the Vehicles JSON file
import { Car } from "@/store/types";
import data from "./vehicles.json";

// Create a new Vehicles Mock API
class VehiclesAPI {
  getVehicles = (): Promise<Car[]> => {
    // @TODO: Fake Pagination

    return new Promise((resolve) => {
      // Simulate network (250ms) delay
      setTimeout(() => resolve(data.vehicles), 250);
    });
  };

  // Get a specific vehicle by its ID
  getVehicle = (id: number): Promise<Car> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          // Filter vehicles and return with matching id.
          const vehicle = data.vehicles.filter(
            (vehicle) => vehicle.id == id
          )[0];
          resolve(vehicle);
        } catch (error) {
          reject(error);
        }
      }, 500);
    });
  };
}

export default VehiclesAPI;
