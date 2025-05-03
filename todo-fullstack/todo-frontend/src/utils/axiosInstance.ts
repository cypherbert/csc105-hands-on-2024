import axios from 'axios';

const Axios = axios.create({
	baseURL: 'http://localhost:5172', // Your backend url
});

export { Axios };