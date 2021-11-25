const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    info: () => `This is the Booked API test`,
    auditions: async (parent, args, context) => {
      return context.prisma.audition.findMany()
    },
  },
  Mutation: {
    post: (parent, args, context, info) => {
        const newAudition = context.prisma.audition.create({
          data: {
            location: args.location,
            description: args.description,
          },
        })
        return newAudition
    },
  },
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
      path.join(__dirname, 'schema.graphql'),
      'utf8'
  ),
  resolvers,
  context: {
    prisma,
  }
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );