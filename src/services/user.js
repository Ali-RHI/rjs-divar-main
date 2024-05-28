import api from 'configs/api.js';
import { getCookie } from 'utils/cookies.js';

const token = getCookie('accessToken');

const getProfile = () => api.get('user/whoami').then((res) => res || false);

const getPosts = () => api.get('post/my');

export { getProfile, getPosts };
