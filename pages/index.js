import React from 'react';
import './Style.css';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

export default class Index extends React.Component {

	// We use fetch from isomorphic-fetch inside our async function getInitialProps()
	// and what is return by this function will be available as props to your Index Page.
	static async getInitialProps( context ) {
		const res = await fetch( 'https://api.tvmaze.com/search/shows?q=batman' );
		const data = await res.json();

		return {
			shows: data
		};
	}

	render() {
		// This will contain data
		// console.warn( 'cards', this.props.shows );

		return(
			<div>
				{/*Navigation*/}
				<Link href="/"><a>Home</a></Link>
				<Link href="/about"><a>About</a></Link>

				{/*Heading*/}
				<h1>React with Next JS</h1>

				{/*Image*/}
				<img src="/static/logo.png" width="200" alt="Logo"/>
			</div>
		)

	}
}
