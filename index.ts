import * as Koa from 'koa';
import * as Router from 'koa-router';

export const app = new Koa();
const port = process.env.npm_package_config_port || 3000;
const router = new Router();

router.get('/', context => context.body = 'Dude!');
router.get('*', context => context.body = 'Hello World');

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(port, () => console.log(`Listening on port ${port}...`));
