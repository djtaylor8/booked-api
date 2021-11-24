const { ApolloServer } = require('apollo-server');

// 1
const typeDefs = `
  type Query {
    info: String!
    auditions: [Audition!]!
  }

  type Mutation {
    post(location: String!, description: String!): Audition!
  }

  type Audition {
      id: ID!
      description: String!
      location: String!
  }
`
let auditions = [{
    id: 'audition-0',
    location: 'Sample Casting Agency',
    description: 'Frightened Inmate #2'
  }]

// 2
const resolvers = {
  Query: {
    info: () => `This is the Booked API test`,
    auditions: () => auditions,
  },
  Audition: {
      id: (parent) => parent.id,
      description: (parent) => parent.description,
      location: (parent) => parent.location,
  }
}

// 3
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );