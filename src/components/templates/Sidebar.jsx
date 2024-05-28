import { useQuery } from '@tanstack/react-query';
import { getCategory } from '../../services/admin.js';
import styles from "./Sidebar.module.css"

function Sidebar() {
	const { data } = useQuery({
		queryFn: getCategory,
		queryKey: ['get-categories'],
	});
	return <div className={styles.sidebar}>
        <h4>دسته ها</h4>
        <ul>
            {data?.data.map(category=>(
                <li key={category._id}>
                    <img src={`${category.icon}.svg`} alt="" />
                    <p>{category.name}</p>
                </li>
            ))}
        </ul>
    </div>;
}

export default Sidebar;
