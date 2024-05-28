import { useQuery } from '@tanstack/react-query';
import Main from 'components/templates/Main.jsx';
import Sidebar from 'components/templates/Sidebar.jsx';
import { getAllPosts } from 'services/user.js';
import Loader from 'components/module/Loader.jsx';
import { getCategory } from '../services/admin.js';

const style = { display: 'flex' };

function HomePage() {
	const { data: posts, isLoading: postLoading } = useQuery({
		queryKey: ['post-list'],
		queryFn: getAllPosts,
	});
	const { data: categories, isLoading: categoryLoading } = useQuery({
		queryFn: getCategory,
		queryKey: ['get-categories'],
	});
	return (
		<>
			{postLoading || categoryLoading ? (
				<Loader />
			) : (
				<div style={style}>
					<Sidebar data={categories} />
					<Main posts={posts} />
				</div>
			)}
		</>
	);
}

export default HomePage;
