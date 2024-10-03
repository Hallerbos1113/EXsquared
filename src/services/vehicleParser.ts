import { fetchVehicleMakes, fetchVehicleTypesForMake } from '../api/vehicleService';

export const transformVehicleData = async (id: String) => {
  const makes = await fetchVehicleMakes();
  let transformedData = await Promise.all(
    makes.map(async (make: any) => {
      let vehicleTypes;
      if(id == "" || id == undefined) {
        // If you call all data, vpic server occures errors.
        //vehicleTypes = await fetchVehicleTypesForMake(make.Make_ID[0]);
        return {
          makeId: Number(make.Make_ID[0]),
          makeName: make.Make_Name[0],
          //vehicleTypes: vehicleTypes,
        };;
      }else if(id == make.Make_ID[0]) {
        // Call one of makes.
        vehicleTypes = await fetchVehicleTypesForMake(make.Make_ID[0]);
        return {
          makeId: Number(make.Make_ID[0]),
          makeName: make.Make_Name[0],
          vehicleTypes: vehicleTypes,
        };
      }
      
    })
  );
  transformedData = transformedData.filter(item => item)
  return transformedData;
};