
import * as Router from 'koa-router';

export const router = new Router();

router.get('/', context => context.body = 'Dude!');
router.get('/error', () => { throw new Error('Error') });
router.get('/api/test', context => context.body = { message: 'json message' });
router.post('/', context => {
	console.log(context.request.body);
	context.body = 'Nice!';
});
router.get('/login', context => context.body = 'login');
router.get('/logout', context => {
	(context as any).session.authenticated = false;
	context.redirect('/login');
});
router.post('/login', context => {
	const params = context.request.body;
	if (params.username !== 'username' || params.password !== 'password') {
		return this.status = 400;
	}
	(context as any).session.authenticated = true;
	context.redirect('/');
});
router.get('*', context => context.body = 'Hello World');
