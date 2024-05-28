import api from '../configs/api.js';

const addCategory = (data) => api.post('category', data);
const getCategory = () => api.get('category');

export { addCategory,getCategory };
