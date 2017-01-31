
import * as Router from 'koa-router';
import { configureLogin } from './login';
import { configureBaseRoutes } from './baseRoutes';

export const router = new Router();

configureLogin(router);
configureBaseRoutes(router);
