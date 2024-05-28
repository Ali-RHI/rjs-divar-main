import { useQuery } from '@tanstack/react-query';
import { getCategory } from '../../services/admin.js';

function AddPost() {
	const { data } = useQuery({
		queryFn: getCategory,
		queryKey: ['get-categories'],
	});

	const addHandler = (event) => {
		event.preventDefault();
        console.log("sent")
	};
	return (
		<form>
			<h3>افزودن آگهی</h3>

			<label htmlFor="title">عنوان</label>
			<input
				type="text"
				name="title"
				id="title"
			/>

			<label htmlFor="content">توضیحات</label>
			<textarea
				name="content"
				id="content"
			/>

			<label htmlFor="price">قیمت</label>
			<input
				type="text"
				name="price"
				id="price"
			/>

			<label htmlFor="city">شهر</label>
			<input
				type="text"
				name="city"
				id="city"
			/>

			<label htmlFor="category">دسته بندی</label>
			<select
				name="category"
				id="category">
				{data?.data.map((i) => (
					<option
						key={i._id}
						value={i._id}>
						{i.name}
					</option>
				))}
			</select>
			<label htmlFor="images">عکس</label>
			<input
				type="file"
				id="images"
				name="images"
			/>
			<button onClick={addHandler}>ایجاد آگهی</button>
		</form>
	);
}

export default AddPost;
