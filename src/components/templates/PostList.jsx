import { useQuery } from '@tanstack/react-query';
import { getPosts } from 'services/user.js';
import Loader from '../module/Loader.jsx';
import styles from './PostList.module.css';
import { sp } from 'utils/replaceNumber.js';

function PostList() {
	const { data, isLoading } = useQuery({
		queryKey: ['my-post-list'],
		queryFn: getPosts,
	});
	return (
		<div className={styles.list}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<h3>آکهی های شما</h3>
					{data.data.posts.map((post) => (
						<div
							key={post._id}
							className={styles.post}>
							<img
								src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
								alt=""
							/>
							<div>
								<p>{post.options.title}</p>
								<span>{post.options.content}</span>
							</div>
							<div className={styles.price}>
								<p>
									{new Date(
										post.createdAt
									).toLocaleDateString('fa-IR')}
								</p>
								<span>{sp(post.amount)}</span>
							</div>
						</div>
					))}
				</>
			)}
		</div>
	);
}

export default PostList;
