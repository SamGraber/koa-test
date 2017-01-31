
import * as Router from 'koa-router';

export const router = new Router();

router.get('/', context => context.body = 'Dude!');
router.get('/api/test', context => context.body = { message: 'json message' });
router.post('/', context => {
	console.log(context.request.body);
	context.body = 'Nice!';
});
router.get('*', context => context.body = 'Hello World');
