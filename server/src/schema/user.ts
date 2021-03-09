import {gql} from 'apollo-server';

export const userSchema = gql`
  enum UserSubscription {
    free
    basic
    premium
  }

  type User {
    id: String
    name: String
    subscription: UserSubscription
  }

  extend type Query {
    users: [User!]!
  }
`;
