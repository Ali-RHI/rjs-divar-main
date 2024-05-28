import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import Router from 'router/Router.jsx';
import defaultOptions from 'configs/reactQuery.js';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from 'layout/Layout.jsx';

function App() {
	const queryClient = new QueryClient({ defaultOptions });
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Layout>
					<Router />
				</Layout>
			</BrowserRouter>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
