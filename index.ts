import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as session from 'koa-session';
import { router } from './routes';
import { keys }from './config/keys';

export const app = new Koa();
const port = process.env.npm_package_config_port || 3000;
app.keys = keys;

app.use(errorHandler());
app.use(session(app));
app.use((context, next) => {
	if ((context as any).session.authenticated || context.request.path == '/login' || context.request.path == '/logout') {
		return next();
	}
	this.status = 401;
});
app.use(bodyParser());
app.use(router.routes())
   .use(router.allowedMethods());

app.listen(port, () => console.log(`Listening on port ${port}...`));

function errorHandler() {
	return async (context, next) => {
		try {
			await next();
		} catch (error) {
			console.log(error.message);
			context.body = 'Error';
		}
	};
}
