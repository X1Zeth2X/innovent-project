// Import the Vehicles JSON file
import data from "./vehicles.json";

// Create a new Vehicles Mock API
class VehiclesAPI {
  getVehicles = () => {
    return new Promise((resolve, _reject) => {
      // Simulate network (250ms) delay
      setTimeout(() => resolve(data.vehicles), 250);
    });
  };

  // Get a specific vehicle by its ID
  getVehicle = (id: string) => {
    return new Promise((_resolve, reject) => {
      // Search the vehicles list
      reject("IMPLEMENT");
    });
  };
}

export default VehiclesAPI;
