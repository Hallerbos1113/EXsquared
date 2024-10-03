import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Vehicle {
    makeId: Int
    makeName: String
    vehicleTypes: [VehicleType]
  }

  type VehicleType {
    typeId: Int
    typeName: String
  }

  type Query {
    getVehicles: [Vehicle]
    getVehicle(id: ID!): [Vehicle]
  }
`;

/*const typeDefs = gql`
  type Vehicle {
    makeId: Int
    makeName: String
  }

  type VehicleType {
    typeId: Int
    typeName: String
  }

  type Query {
    getVehicles: [Vehicle]
  }
`;*/

export default typeDefs;