import { sp } from '../../utils/replaceNumber.js';

import styles from './Main.module.css';

function Main({ posts }) {
	return (
		<div className={styles.container}>
			{posts?.map((post) => (
				<div
					key={post._id}
					className={styles.card}>
					<div className={styles.info}>
						<p>{post.options?.title}</p>
						<div>
							<p>{sp(post.amount)} تومان</p>
							<span>{post.options?.city}</span>
						</div>
					</div>
					<img
						src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
						alt=""
					/>
				</div>
			))}
		</div>
	);
}

export default Main;
