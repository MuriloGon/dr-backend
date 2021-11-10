import express from 'express';
import cors from 'cors';
import * as inkMiddlewares from './controllers/inks';
import * as loginMiddlewares from './controllers/login';
import { validateBodyObj } from './middlewares/inks';

const app = express();
app.use(express.json());
app.use(cors({ 
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  origin: '*',
}));

app.post('/login', loginMiddlewares.login);

app.get('/inks', inkMiddlewares.getAll);

app.get('/inks/:id',  inkMiddlewares.getById);

app.delete('/inks/:id', inkMiddlewares.deleteById);

app.use(validateBodyObj);

app.post('/inks', inkMiddlewares.create);
app.put('/inks/:id', inkMiddlewares.editById);


export default app;
