import fetch from 'isomorphic-unfetch';
import Link from "next/link";

const About = ( props ) => {

	return (
		<div>
			{/*Navigation*/}
			<Link href="/"><a>Home</a></Link>
			<Link as="/hello" href="/about"><a>About</a></Link>
			<h1>This is About</h1>
		</div>
	)
};

About.getInitialProps = async ( context ) => {
	
	const res = await fetch( 'https://api.tvmaze.com/search/shows?q=batman' );

	// Once you get the response from fetch , you creat a json
	const data = await res.json();

	return {
		shows: data
	};
};


export default About
