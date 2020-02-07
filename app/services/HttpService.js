import {
	API_URL,
	AUTH_LOGIN,
	UPDATE_USER_AGE,
	PRODUCT_URL,
	PURCHASE_URL,
	BAR_GRAPH,
	SEARCH_URL,
	USER_URL
} from '../constants';
import {getToken} from '../utils/Api';

/**
 *  Functions
 */

const payload = (token, method, body = {}) => {
	const response = {
		method: method,
		mode: 'cors',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json',
			'x-token': token
		}
	};
	if (method.toLowerCase() !== 'get') response.body = JSON.stringify(body);
	return response;
};

/**
 * 	Fetch Auth
 */
export async function fetchLogin() {
	const URL = `${API_URL}${AUTH_LOGIN}`;
	const token = await getToken();
	const res = await fetch(URL, payload(token, 'POST'));
	return res.json();
}

export async function fetchGetUser() {
	const URL = `${API_URL}${USER_URL}`;
	const token = await getToken();
	const res = await fetch(URL, payload(token, 'GET'));
	return res.json();
}

export async function fetchUpdateUserAge(age) {
	const URL = `${API_URL}${UPDATE_USER_AGE}`;
	const token = await getToken();
	const res = await fetch(URL, payload(token, 'PUT', {age}));
	return res.json();
}

/**
 * 	Fetch Products
 */
export async function fetchAllProducts() {
	const URL = `${API_URL}${PRODUCT_URL}`;
	const token = await getToken();
	const res = await fetch(URL, payload(token, 'GET'));
	return res.json();
}

export async function fetchProductById(productId) {
	const URL = `${API_URL}${PRODUCT_URL}/${productId}`;
	const token = await getToken();
	const res = await fetch(URL, payload(token, 'GET'));
	return res.json();
}

export async function fetchCreateProduct(product) {
	const URL = `${API_URL}${PRODUCT_URL}`;
	const token = await getToken();
	const res = await fetch(URL, payload(token, 'POST', product));
	return res.json();
}

/**
 * 	Fetch Purchase
 */
export async function fetchCreatePurchase(changes, userId) {
	const URL = `${API_URL}${PURCHASE_URL}/${userId}`;
	const token = await getToken();
	const res = await fetch(URL, payload(token, 'PUT', changes));
	return res.json();
}

export async function fetchGraph() {
	const URL = `${API_URL}${BAR_GRAPH}`;
	const token = await getToken();
	const res = await fetch(URL, payload(token, 'GET'));
	return res.json();
}

/**
 * 	Fetch Search
 */
async function fetchSearchProduct(
	search,
	sortOrder = 'asc',
	pageNumber = 0,
	pageSize = 3
) {
	const query = `search:${search}&sortOrder:${sortOrder}&pageNumber:${pageNumber}&pageSize:${pageSize}`;
	const URL = `${API_URL}${SEARCH_URL}${query}`;
	const token = await getToken();
	const res = await fetch(URL, payload(token, 'GET'));
	return res.json();
}
