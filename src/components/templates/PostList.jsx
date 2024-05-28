import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../services/user.js';

function PostList() {
	const { data, isLoading } = useQuery(['my-post-list'], getPosts);
	return <div>PostList</div>;
}

export default PostList;
