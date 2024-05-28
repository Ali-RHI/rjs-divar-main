import api from '../configs/api.js';

const addCategory = (data) => api.post('category', data);

export { addCategory };
