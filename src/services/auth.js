import axios from 'axios';
import { ENV } from '../constants/env';

export const loginUser = async userData => {
	const url = `${ENV.SERVER_URL_BASE}/users/login`;
	const res = await axios.post(url, userData);
	return res.data;
};
