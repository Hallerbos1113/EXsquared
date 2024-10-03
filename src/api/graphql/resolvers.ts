import { transformVehicleData } from '../../services/vehicleParser';
import { Vehicle } from '../../models/vehicle';

const resolvers = {
  Query: {
    getVehicles: async () => {
      const data = await transformVehicleData("");
      return data;
    },
    getVehicle: async (root: any, args: { id: String }) => {
      const data = await transformVehicleData(args.id);
      // console.log(data)
      try{
        await Vehicle.insertMany(data);
      } catch(e) {
        console.log(e);
      }
      return data;
    }
  }
};

export default resolvers;