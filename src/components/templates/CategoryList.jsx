import { useQuery } from '@tanstack/react-query';
import { getCategory } from '../../services/admin.js';
import Loader from '../module/Loader.jsx';
import styles from "./CategoryList.module.css"

function CategoryList() {
	const { data, isLoading } = useQuery({
		queryFn: getCategory,
		queryKey: ['get-categories'],
	});
	console.log({ data, isLoading });
	return (
		<div className={styles.list}>
			{isLoading ? (
				<Loader />
			) : (
				data.data.map((i) => (
					<div key={i._id}>
                        <img src={`${i.icon}.svg`} alt="" />
						<h5>{i.name}</h5>
                        <p>slug: {i.slug}</p>
					</div>
				))
			)}
		</div>
	);
}

export default CategoryList;
