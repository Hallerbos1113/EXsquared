import express from 'express';
require('dotenv').config();
import { ApolloServer } from 'apollo-server-express';
import schema from './api/graphql/schema';
import resolvers from './api/graphql/resolvers';
import { connectDB } from './config/database';

const port = process.env.PORT || 5000;

const app = express();
connectDB();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

// Await server start
server.start().then(()=>{
  server.applyMiddleware({ app });

  app.listen({ port }, () => 
    console.log(`server ready at port ${port}`)
  )
}).catch(err => {
  console.log(err);
});