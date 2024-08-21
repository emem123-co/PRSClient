import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { Request } from "./Request";

let url = `${BASE_URL}/requests`;

function replacer(key: string, value: any) {
	if (key === "vendor") return undefined;
	return value;
}

export const requestAPI = {
	list(): Promise<Request[]> {
		return fetch(`${url}?_sort=name&_order=asc`).then(checkStatus).then(parseJSON);
	},

	find(id: number): Promise<Request[]> {
		return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
	},

	delete(id: number) {
		return fetch(`${url}/delete/${id}`, { method: "DELETE" }).then(checkStatus);
	},

	post(request: Request) {
		return fetch(`${url}`, {
			method: "POST",
			body: JSON.stringify(request, replacer),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(checkStatus)
			.then(parseJSON);
	},

	put(request: Request) {
		return fetch(`${url}/${request.id}`, {
			method: "PUT",
			body: JSON.stringify(request),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(checkStatus)
			.then(parseJSON);
	},

	insert(request: Request) {
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(request),
		})
			.then(checkStatus)
			.then(parseJSON);
	},
};