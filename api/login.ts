import * as Router from 'koa-router';

export function configureLogin(router: Router) {
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
	return router
}
