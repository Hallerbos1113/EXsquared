import axios from 'axios';
import { parseXML } from '../utils/xmlParser';

const fetchAndParseXML = async (url: string) => {
  try {
    const response = await axios.get(url);
    return await parseXML(response.data);
  } catch (error) {
    console.error(`Error fetching and parsing XML: ${error}`);
    return null;
  }
};

export const fetchVehicleMakes = async () => {
  const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=XML';
  const json = await fetchAndParseXML(url);

  if (!json || !json.Response?.Results[0]?.AllVehicleMakes) {
    return [];
  }

  return json.Response.Results[0].AllVehicleMakes;
};

export const fetchVehicleTypesForMake = async (makeId: number) => {
  const url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/${makeId}?format=xml`;
  const json = await fetchAndParseXML(url);

  if (!json || !json.Response?.Results[0]?.VehicleTypesForMakeIds) {
    return [{ typeId: 0, typeName: "" }];
  }

  return json.Response.Results[0].VehicleTypesForMakeIds.map((item: any) => ({
    typeId: item.VehicleTypeId[0] || 0,
    typeName: item.VehicleTypeName[0] || ""
  }));
};