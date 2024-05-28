import { useState } from 'react';

import styles from './CategoryForm.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCategory } from 'services/admin.js';

function CategoryForm() {
	const queryClient = useQueryClient();
	const [form, setform] = useState({ name: '', slug: '', icon: '' });
	const changeHandler = (event) => {
		setform({ ...form, [event.target.name]: event.target.value });
	};

	const { mutate, isLoading, error, data } = useMutation({
		mutationFn: addCategory,
		onSuccess: () => {
			queryClient.invalidateQueries('get-categories');
		},
	});

	const submitHandler = (event) => {
		event.preventDefault();

		if (!form.name || !form.icon || !form.slug) return;
		mutate(form);
		console.log(form);
	};

	return (
		<form
			onChange={changeHandler}
			onSubmit={submitHandler}
			className={styles.form}>
			<h3>دسته بندی جدید</h3>
			{!!error && <p>مشکلی پیش آمده است!</p>}
			{data?.status === 201 && <p>دسته بندی با موفقیت اضافه شد</p>}
			<label htmlFor="name">اسم دسته بندی</label>
			<input
				type="text"
				name="name"
				id="name"
			/>
			<label htmlFor="slug">اسلاگ</label>
			<input
				type="text"
				name="slug"
				id="slug"
			/>
			<label htmlFor="icon">آیکان</label>
			<input
				type="text"
				name="icon"
				id="icon"
			/>
			<button
				type="submit"
				disabled={isLoading}>
				ایجاد
			</button>
		</form>
	);
}

export default CategoryForm;
