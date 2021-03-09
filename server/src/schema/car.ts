import {gql} from 'apollo-server';

export const carSchema = gql`
  type Car {
    brand: String
    licensePlate: String
  }

  extend type User {
    cars: [Car!]
  }
`;
