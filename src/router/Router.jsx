import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage.jsx';
import DashboardPage from 'pages/DashboardPage.jsx';
import AuthPage from 'pages/AuthPage.jsx';
import AdminPage from 'pages/AdminPage.jsx';
import PageNotFound from 'pages/PageNotFound.jsx';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from 'services/user.js';
import Loader from '../components/module/Loader.jsx';

function Router() {
	const { data, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: getProfile,
	});

	if (isLoading) return <Loader />;

	return (
		<Routes>
			<Route
				index
				element={<HomePage />}
			/>
			<Route
				path="/dashboard"
				element={data ? <DashboardPage /> : <Navigate to="/auth" />}
			/>
			<Route
				path="/auth"
				element={!data ? <AuthPage /> : <Navigate to="/dashboard" />}
			/>
			<Route
				path="/admin"
				element={
					data && data.data.role === 'ADMIN' ? (
						<AdminPage />
					) : (
						<Navigate to="/" />
					)
				}
			/>
			<Route
				path="/*"
				element={<PageNotFound />}
			/>
		</Routes>
	);
}

export default Router;
