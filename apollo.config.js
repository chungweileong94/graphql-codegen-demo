module.exports = {
  client: {
    service: {
      name: 'bereev-development',
      localSchemaFile: './server/src/generated/introspection.json',
      // url: 'http://localhost:4000',
    },
    includes: ['./client/src/apollo/graphql/*.gql'],
  },
};
