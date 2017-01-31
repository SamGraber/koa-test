import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Router from 'koa-router';

export const app = new Koa();
const port = process.env.npm_package_config_port || 3000;
const router = new Router();

router.get('/', context => context.body = 'Dude!');
router.post('/', context => {
	console.log(context.request.body);
	context.body = 'Nice!';
});
router.get('*', context => context.body = 'Hello World');

app.use(bodyParser());
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(port, () => console.log(`Listening on port ${port}...`));
