import axios from 'axios';
import { getCookie, setCookie } from '../utils/cookies.js';
import { getNewTokens } from '../services/token.js';

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

api.interceptors.response.use(
	(res) => {
		return res;
	},
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 401 && !originalRequest._retry) {
			console.log('false false false');
			originalRequest._retry = true;
			const res = await getNewTokens();
			if (!res?.response) return;
			setCookie(res.response.data);
			return api(originalRequest);
		}
	}
);

export default api;
