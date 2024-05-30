import { useQuery } from '@tanstack/react-query';
import Main from 'components/templates/Main.jsx';
import Sidebar from 'components/templates/Sidebar.jsx';
import { getAllPosts } from 'services/user.js';
import Loader from 'components/module/Loader.jsx';
import { getCategory } from '../services/admin.js';
import { useEffect, useState } from 'react';
import {
	addCategoryId,
	filterPosts,
	getInitialQuery,
} from '../helpers/helper.js';
import { useSearchParams } from 'react-router-dom';

const style = { display: 'flex' };

function HomePage() {
	const [query, setQuery] = useState({});
	const [displayed, setDisplayed] = useState();
	const [searchParams, setSearchParams] = useSearchParams();

	const { data: posts, isLoading: postLoading } = useQuery({
		queryKey: ['post-list'],
		queryFn: getAllPosts,
	});
	const { data: categories, isLoading: categoryLoading } = useQuery({
		queryFn: getCategory,
		queryKey: ['get-categories'],
	});

	useEffect(() => {
		setDisplayed(posts?.data.posts);
		setQuery(
			addCategoryId(getInitialQuery(searchParams), categories?.data)
		);
	}, [posts, categories]);

	useEffect(() => {
		const { categoryId, ...mainQuery } = query;
		setSearchParams(mainQuery);
		const filteredPosts = filterPosts(posts?.data.posts, categoryId);
		setDisplayed(filteredPosts);

	}, [query, categories]);

	return (
		<>
			{postLoading || categoryLoading ? (
				<Loader />
			) : (
				<div style={style}>
					<Sidebar
						data={categories}
						query={query}
						setQuery={setQuery}
					/>
					<Main posts={displayed} />
				</div>
			)}
		</>
	);
}

export default HomePage;
