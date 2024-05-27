import api from 'configs/api.js';
import { getCookie } from 'utils/cookies.js';

const getNewTokens = async () => {
	const refreshToken = getCookie('refreshToken');
	if (!refreshToken) return;
	try {
		const response = await api.post('auth/check-refresh-token', {
			refreshToken,
		});
		return { response };
	} catch (e) {
		return { e };
	}
};
export {getNewTokens}