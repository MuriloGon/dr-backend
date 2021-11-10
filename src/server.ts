import express from 'express';
import cors from 'cors';
import * as inkMiddlewares from './controllers/inks';
import * as loginMiddlewares from './controllers/login';

const app = express();
app.use(express.json());
app.use(cors({ 
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  origin: '*',
}));

app.post('/login', loginMiddlewares.login);

app.get('/inks', inkMiddlewares.getAll);

app.post('/inks', inkMiddlewares.create);

app.get('/inks/:id',  inkMiddlewares.getById);

app.put('/inks/:id', inkMiddlewares.editById);

app.delete('/inks/:id', inkMiddlewares.deleteById);

export default app;
