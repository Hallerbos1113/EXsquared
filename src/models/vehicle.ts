import mongoose from 'mongoose';

const VehicleSchema = new mongoose.Schema({
  makeId: {
    type: Number,
    unique: true
  },
  makeName: String,
  vehicleTypes: [
    {
      typeId: Number,
      typeName: String
    }
  ]
});

export const Vehicle = mongoose.model('Vehicles', VehicleSchema);