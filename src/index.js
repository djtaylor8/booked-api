const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');

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
  Mutation: {
    post: (parent, args) => {
        let idCount = auditions.length
            const audition = {
                id: `audition-${idCount++}`,
                description: args.description,
                location: args.location,
            }
            auditions.push(audition)
            return audition
    }
  },
}

// 3
const server = new ApolloServer({
  typeDefs: fs.readFileSync(
      path.join(__dirname, 'schema.graphql'),
      'utf8'
  ),
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );