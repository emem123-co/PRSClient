import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { RequestLines } from "../requestlines/RequestLines";

let url = `${BASE_URL}/requests`;

function replacer(key: string, value: any) {
	if (key === "vendor") return undefined;
	return value;
}

export const requestLineAPI = {
	list(): Promise<RequestLines[]> {
		return fetch(`${url}?_sort=name&_order=asc`).then(checkStatus).then(parseJSON);
	},

	find(id: number): Promise<RequestLines[]> {
		return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
	},

	delete(id: number) {
		return fetch(`${url}/delete/${id}`, { method: "DELETE" }).then(checkStatus);
	},

	post(requestlines: RequestLines) {
		return fetch(`${url}`, {
			method: "POST",
			body: JSON.stringify(requestlines, replacer),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(checkStatus)
			.then(parseJSON);
	},

	put(requestlines: RequestLines) {
		return fetch(`${url}/${requestlines.id}`, {
			method: "PUT",
			body: JSON.stringify(requestlines),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(checkStatus)
			.then(parseJSON);
	},

	insert(requestlines: RequestLines) {
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestlines),
		})
			.then(checkStatus)
			.then(parseJSON);
	},
};
