import Link from 'next/link';

const Index = () => (
	<div>
		{/*Add Nav Links*/}
		<Link href="/" >
			<a title="home page">Home Page</a>
		</Link>
		<Link href="/about" >
			<a title="about page">About Page</a>
		</Link>


		<p>Hello Next.js</p>
	</div>
);

export default Index;
