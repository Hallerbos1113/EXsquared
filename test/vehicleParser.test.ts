import { transformVehicleData } from '../src/services/vehicleParser';

describe('Vehicle Data Transformation', () => {
  test('should correctly transform vehicle data', async () => {
    const result = await transformVehicleData("12838");
    expect(result).toBeDefined();
    expect(result[0]).toHaveProperty('makeId');
    expect(result[0]).toHaveProperty('makeName');
    expect(result[0]).toHaveProperty('vehicleTypes');
  }, 10 * 1000);
});