import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { Vendor } from "./Vendor";

let url = `${BASE_URL}/vendors`;

export const vendorAPI = {
	list() {
		return fetch(`${url}?_sort=name&_order=asc`).then(checkStatus).then(parseJSON);
	},

	find(id: number) {
		return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
	},

	delete(id: number) {
		return fetch(`${url}/delete/${id}`, { method: "DELETE" }).then(checkStatus);
	},

	post(vendor: Vendor) {
		return fetch(`${url}`, {
		  method: "POST",
		  body: JSON.stringify(vendor),
		  headers: {
			 "Content-Type": "application/json",
		  },
		})
		  .then(checkStatus)
		  .then(parseJSON);
	 },
  
	 put(vendor: Vendor) {
		return fetch(`${url}/${vendor.id}`, {
		  method: "PUT",
		  body: JSON.stringify(vendor),
		  headers: {
			 "Content-Type": "application/json",
		  },
		}).then(checkStatus)
		.then(parseJSON);
	 },

	 insert(vendor: Vendor) {
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(vendor)
		}).then(checkStatus).then(parseJSON);
			},

		listByProduct(vendorId: number): Promise<Vendor[]> {
			let currentUrl = `${BASE_URL}/products/${vendorId}/vendors?_expand=products `;
			return fetch(currentUrl).then(checkStatus).then(parseJSON);
			},
	
	 };

