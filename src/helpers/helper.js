const addCategoryId = (query, categories) => {
	const selectedCategory = categories?.find((p) => p.name === query.category);
	return { ...query, categoryId: selectedCategory?._id };
};

const getInitialQuery = (searchParams) => {
	const query = {};
	const category = searchParams.get('category');
	if (category) query.category = category;
	return query;
};

const filterPosts = (posts, categoryId) => {
	const filteredPosts = posts?.filter((p) => p.category == categoryId);
	if (!categoryId) return posts;
	return filteredPosts;
};

export { addCategoryId, getInitialQuery, filterPosts };
