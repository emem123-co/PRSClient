import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { Vendor } from "./Vendor";

let url = `${BASE_URL}/vendors`;

export const vendorAPI = {
	list(): Promise<Vendor[]> {
		return fetch(`${url}?_sort=name&_order=asc`).then(checkStatus).then(parseJSON);
	},

	find(id: number): Promise<Vendor>  {
		return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
	},

	delete(id: number) {
		return fetch(`${url}/delete/${id}`, { method: "DELETE" }).then(checkStatus);
	},


	post(vendor: Vendor): Promise<Vendor> {
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
		})
			.then(checkStatus)
	},

	insert(vendor: Vendor) {
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(vendor),
		})
			.then(checkStatus)
	},

};
