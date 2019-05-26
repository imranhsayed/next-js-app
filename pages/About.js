import Link from "next/link";

export default function About() {
	return (
		<div>
			<Link href="/" >
				<a>Home Page</a>
			</Link>
			<Link href="/about" >
				<a>About Page</a>
			</Link>
			<p>This is the about page</p>
		</div>
	)
};
