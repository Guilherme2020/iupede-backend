// src/routes/index.ts
import { Router } from 'express';
import usersRouter from './user.routes';
import sessionsRouter from './sessions.routes';
import companieRouter from './companie.routes';
import categoriesRouter from './categories.routes';
import storesRouter from './stores.routes';
import productRouter from './product.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/companies', companieRouter);
routes.use('/categories', categoriesRouter);
routes.use('/stores', storesRouter);
routes.use('/products', productRouter);
export default routes;
