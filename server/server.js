import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import organizationRoutes from './routes/organizations.routes.js';
import animalRoutes from './routes/animals.routes.js';

dotenv.config();

const connectionString =
  process.env.DB_CONNECTION || 'mongodb://localhost:27017/pawzies-adoption';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.set('returnOriginal', false);

const server = express();

server.use(cors());

server.use(express.json());
server.use(organizationRoutes);
server.use(animalRoutes);

server.get('/', (req, res) =>
  res.json({ message: 'Server is up and running!' })
);

server.listen(4000);
