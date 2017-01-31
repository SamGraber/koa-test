import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { router } from './routes';

export const app = new Koa();
const port = process.env.npm_package_config_port || 3000;

app.use(errorHandler());
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
