import axios from 'axios';

export const loginUser = async userData => {
	const url = 'https://m-ser.onrender.com/login';
	const res = await axios.post(url, userData);
	return res.data;
};
