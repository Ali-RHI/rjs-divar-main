import { useQuery } from '@tanstack/react-query';
import { getCategory } from '../../services/admin.js';

function CategoryList() {
	const { data, isLoading } = useQuery({
		queryFn: getCategory,
		queryKey: ['get-categories'],
	});
	console.log({ data, isLoading });
	return <div>CategoryList</div>;
}

export default CategoryList;
