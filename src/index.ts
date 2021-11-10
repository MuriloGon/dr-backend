import 'reflect-metadata';
import { createConnection } from 'typeorm';
import server from './server';

createConnection().then(() => {
  const { PORT = 3030 } = process.env;
  server.listen(PORT, () => console.log('listening port: ' + PORT));
}).catch(error => console.log(error));
