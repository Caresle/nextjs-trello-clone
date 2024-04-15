import axios from "axios";

export const initApi = () => {
	axios.defaults.baseURL = process.env.BASE_URL;
};

export const get = (route = "", params = {}) => {
	initApi();
	return axios.get(route, {
		params,
	});
};

export const post = (route = "", data = {}) => {
	initApi();
	return axios.post(route, data);
};

export const put = (route = "", data = {}) => {
	initApi();
	return axios.put(route, data);
};

export const del = (route = "", data = {}) => {
	initApi();
	return axios.delete(route, {
		data,
	});
};
