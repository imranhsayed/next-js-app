const Post = ( props ) => {

	console.warn( props );

	return (
		<div>
			{ props.url.query.title }
		</div>
	)
};

export default Post;

