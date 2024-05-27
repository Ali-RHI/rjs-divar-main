import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage.jsx';
import DashboardPage from 'pages/DashboardPage.jsx';
import AuthPage from 'pages/AuthPage.jsx';
import AdminPage from 'pages/AdminPage.jsx';
import PageNotFound from 'pages/PageNotFound.jsx';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from 'services/user.js';

function Router() {
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
	});

	if (isLoading) return <h1>Loading</h1>;

	return (
		<Routes>
			<Route
				index
				element={<HomePage />}
			/>
			<Route
				path="/dashboard"
				element={<DashboardPage />}
			/>
			<Route
				path="/auth"
				element={<AuthPage />}
			/>
			<Route
				path="/admin"
				element={<AdminPage />}
			/>
			<Route
				path="/*"
				element={<PageNotFound />}
			/>
		</Routes>
	);
}

export default Router;
