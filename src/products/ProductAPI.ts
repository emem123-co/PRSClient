import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { Product } from "./Product";

let url = `${BASE_URL}/products`;

export const productAPI = {
	list() {
		return fetch(`${url}?_sort=name&_order=asc`).then(checkStatus).then(parseJSON);
	},

	find(id: number) {
		return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
	},
	
	// findVendor(id: number) {
	// 	return fetch(`${url}/${vendorId}`).then(checkStatus).then(parseJSON)
	// },

	delete(id: number) {
		return fetch(`${url}/delete/${id}`, { method: "DELETE" }).then(checkStatus);
	},

	post(product: Product) {
		return fetch(`${url}`, {
			method: "POST",
			body: JSON.stringify(product),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(checkStatus)
			.then(parseJSON);
	},

	put(product: Product) {
		return fetch(`${url}/${product.id}`, {
			method: "PUT",
			body: JSON.stringify(product),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(checkStatus)
			.then(parseJSON);
	},

	insert(product: Product) {
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(product),
		})
			.then(checkStatus)
			.then(parseJSON);
	},
};
