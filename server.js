const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
	.prepare()
	.then(() => {
		const server = express();

		// Express server handlers
		server.get('/p/:id', (req, res) => {
			const actualPage = '/post';
			const queryParams = { title: req.params.id };
			app.render(req, res, actualPage, queryParams);
		});

		server.get('/post/:slug', (req, res) => {
			const queryParams = { slug: req.params.slug, apiRoute: 'post' };
			app.render(req, res, '/post', queryParams);
		});

		server.get('/page/:slug', (req, res) => {
			const queryParams = { slug: req.params.slug, apiRoute: 'page' };
			app.render(req, res, '/post', queryParams);
		});

		server.get('/category/:slug', (req, res) => {
			const queryParams = { slug: req.params.slug };
			app.render(req, res, '/category', queryParams);
		});

		// Fallback handler
		server.get('*', (req, res) => {
			return handle(req, res)
		});

		// Listen on the default port (3000)
		server.listen(dev, err => {
			if (err) throw err;
			console.log('> Ready on http://localhost:3000')
		})
	})
	.catch(error => {
		console.error(error.stack);
		process.exit(1)
	});
