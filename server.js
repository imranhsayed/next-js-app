const express = require( 'express' );
const next = require( 'next' );

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next( { dev } );
const handle = app.getRequestHandler();

/**
 * app (next js ) will prepare our server with express, and then,
 * wrap express application inside next
 *
 */
app.prepare()
	.then( () => {
		const server = express();

		server.get('/p/:slug', (req, res) => {
			const actualPage = '/post';
			const queryParams = { title: req.params.slug };
			app.render(req, res, actualPage, queryParams);
		});

		/**
		 * Wrapping express app inside next will allow us to create routes by using
		 * express js function inside of the next js build
		 *
		 * '*' means all routes which are not explicit , use this route for them.
		 */
		server.get( '*', ( req, res ) => {
			return handle( req, res );
		} );

		server.listen( port, ( err ) => {
			if ( err ) {
				throw err;
			}
			console.warn( `Ready on http://localhost:${port}` );
		} );
	} );
