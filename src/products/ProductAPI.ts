import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { Product } from "./Product";
import { vendorAPI } from "../vendors/VendorAPI";

let url = `${BASE_URL}/products`;

export const productAPI = {
	list() {
		return fetch(`${url}?_sort=name&_order=asc`).then(checkStatus).then(parseJSON);
	},

	find(id: number) {
		return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
	},

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

	async findVendorbyProdID(id: number): Promise<Product> {
		let product = await productAPI.find(id);

		if(product.id) {
			product.vendors = await vendorAPI.listByProduct(product?.id)
		}
		return Promise.resolve(product);
	}
};
