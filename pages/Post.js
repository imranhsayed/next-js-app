import fetch from 'isomorphic-unfetch';

const Post = ( props ) => {
	const { post } = props;

	return (
		<div>{ post.title.rendered }</div>
	)
};

Post.getInitialProps = async ( context ) => {

	const postId = context.query.id;

	const res = await fetch( `http://codeytek.com/wp-json/wp/v2/posts/${ postId }` );
	const postData = await res.json();

	return {
		post: postData
	}
};

export default Post;
