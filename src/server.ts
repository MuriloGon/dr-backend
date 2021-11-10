import express from 'express';
import cors from 'cors';
import * as inkControllers from './controllers/inks';
import * as loginControllers from './controllers/login';
import * as inksMiddlewares from './middlewares/inks';
import * as userMiddlewares from './middlewares/user';
import * as authMiddlewaresfrom from './middlewares/auth';

const app = express();
app.use(express.json());
app.use(cors({
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  origin: '*',
}));

app.post('/login',
  userMiddlewares.validateBodyObj,
  loginControllers.login);

app.get('/inks', inkControllers.getAll);

app.get('/inks/:id', inkControllers.getById);

app.delete('/inks/:id',
  authMiddlewaresfrom.validateBodyObj,
  inkControllers.deleteById,
);


app.post('/inks',
  inksMiddlewares.validateBodyObj,
  inkControllers.create,
);
app.put('/inks/:id',
  authMiddlewaresfrom.validateBodyObj,
  inksMiddlewares.validateBodyObj,
  inkControllers.editById,
);


export default app;
