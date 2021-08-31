
  //To run this server, use command line "node GraphQLserver.js" under this directory. Then you can open GraphQLclient.html in a browser to fetch data from the server.

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'This is data from GraphQL-apollo-server',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`Server running at ${url}`));
