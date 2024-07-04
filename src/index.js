import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { gql } from "graphql-tag";
const typeDefs=gql`
  type Query {
    hello: String
  }
`;

const resolvers={
    Query: {
        hello: () => 'Hello, world!',
    },
};

// Create the Apollo Server
const server=new ApolloServer({
    typeDefs,
    resolvers,
});

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
