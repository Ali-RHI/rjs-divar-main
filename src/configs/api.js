import axios from 'axios';
import { getCookie } from '../utils/cookies.js';

const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	(req) => {
		const token = getCookie('accessToken');
		if (token) {
			req.headers['Authorization'] = `bearer ${token}`;
		}
		return req;
	},
	(error) => {
		Promise.reject(error);
	}
);

export default api;
