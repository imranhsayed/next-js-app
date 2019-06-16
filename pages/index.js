import PostLink from "../components/PostLink";
import fetch from 'isomorphic-unfetch';

const Index = ( props ) => {

	const { posts } = props;

	return (
		<div>
			{ posts.length && (
				<ul>
					{ posts.map( item => (
						<PostLink key={item.id} id={ item.id } slug={ item.slug } title = { item.title.rendered } />
					) ) }
				</ul>
			) }
		</div>
	)
};

Index.getInitialProps = async () => {
	const res = await fetch( 'http://codeytek.com/wp-json/wp/v2/posts/' );
	const postsData = await res.json();

	return {
		posts: postsData
	}
};

export default Index;
