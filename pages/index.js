
import Link from 'next/link'

function PostLink(props) {
	return (
		<li>
			<Link as={`/p/${props.slug}`} href={`/post?title=${props.title}`}>
				<a>{props.title}</a>
			</Link>
		</li>
	)
}

export default function Index() {
	return (
		<div>
			<h1>My Blog</h1>
			<ul>
				<PostLink slug="hello-next-js" title="Hello Next.js" />
				<PostLink slug="learn-next" title="Learn Next.js is awesome" />
				<PostLink slug="deploy" title="Deploy apps with Zeit" />
			</ul>
		</div>
	)
}
