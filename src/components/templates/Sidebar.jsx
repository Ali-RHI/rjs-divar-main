import { addCategoryId } from '../../helpers/helper.js';
import styles from './Sidebar.module.css';

function Sidebar({ data, query, setQuery }) {
	const clickHandler = (event) => {
		const { tagName } = event.target;
		if (tagName != 'LI' && tagName != 'IMG' && tagName != 'P') return;
		const category = event.target.innerText;
		if (query.category === category) {
			setQuery({});
			return;
		} 
		const selectedCategory = data?.data.findIndex(
			(p) => p.name === event.target.innerText
		);
		setQuery(addCategoryId({ category }, data.data));
	};

	return (
		<div className={styles.sidebar}>
			<h4>دسته ها</h4>
			<ul onClick={clickHandler}>
				{data?.data.map((category) => (
					<li key={category._id} className={query.categoryId==category._id? styles.selected:null}>
						<img
							src={`${category.icon}.svg`}
							alt=""
						/>
						<p>{category.name}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Sidebar;
