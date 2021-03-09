import {userSchema} from './user';
import {carSchema} from './car';
import {DocumentNode} from 'apollo-link';
import {gql} from 'apollo-server-core';

const rootSchema = gql`
  type Query
  # type Mutation
`;

export const schemas: DocumentNode[] = [rootSchema, userSchema, carSchema];
