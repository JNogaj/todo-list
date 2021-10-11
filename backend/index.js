import express from 'express';
import { json, urlencoded } from 'body-parser';

import { registerRoutes } from './routes';
import { getMongoClient } from './database';

async function init() {
  const app = express();
  const port = 3000;

  app.use(json());

  app.use(urlencoded({ extended: true }));

  const mongoClient = await getMongoClient({
    user: 'admin',
    password: 'admin',
    database: 'todo_list',
  });

  registerRoutes(app, mongoClient);

  app.listen(port, '0.0.0.0', () => {
    console.log('Listening on port ' + port);
  });
}

init();
