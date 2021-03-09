/* DO NOT MODIFY THIS FILE DIRECTLY */
/* Please use `yarn graphql-codegen` to generate this file */
/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Car = {
  __typename?: 'Car';
  brand?: Maybe<Scalars['String']>;
  licensePlate?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  cars?: Maybe<Array<Car>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  subscription?: Maybe<UserSubscription>;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
};

export enum UserSubscription {
  Free = 'free',
  Basic = 'basic',
  Premium = 'premium'
}

export type UserListQueryVariables = Exact<{ [key: string]: never; }>;


export type UserListQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'subscription'>
    & { cars?: Maybe<Array<(
      { __typename?: 'Car' }
      & Pick<Car, 'brand' | 'licensePlate'>
    )>> }
  )> }
);


export const UserListDocument = gql`
    query userList {
  users {
    id
    name
    subscription
    cars {
      brand
      licensePlate
    }
  }
}
    `;

/**
 * __useUserListQuery__
 *
 * To run a query within a React component, call `useUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserListQuery(baseOptions?: Apollo.QueryHookOptions<UserListQuery, UserListQueryVariables>) {
        return Apollo.useQuery<UserListQuery, UserListQueryVariables>(UserListDocument, baseOptions);
      }
export function useUserListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserListQuery, UserListQueryVariables>) {
          return Apollo.useLazyQuery<UserListQuery, UserListQueryVariables>(UserListDocument, baseOptions);
        }
export type UserListQueryHookResult = ReturnType<typeof useUserListQuery>;
export type UserListLazyQueryHookResult = ReturnType<typeof useUserListLazyQuery>;
export type UserListQueryResult = Apollo.QueryResult<UserListQuery, UserListQueryVariables>;