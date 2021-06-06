import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());

server.get('/', (req, res) => res.json('Server is up and running'));

server.listen(4000);
