
import * as Router from 'koa-router';

export const router = new Router();

router.get('/', context => context.body = 'Dude!');
router.post('/', context => {
	console.log(context.request.body);
	context.body = 'Nice!';
});
router.get('*', context => context.body = 'Hello World');
