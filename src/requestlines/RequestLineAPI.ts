import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { RequestLine } from "../requestlines/RequestLine";

let url = `${BASE_URL}/requests`;

function replacer(key: string, value: any) {
	if (key === "vendor") return undefined;
	return value;
}

export const requestLineAPI = {
	list(): Promise<RequestLine[]> {
		return fetch(`${url}?_sort=name&_order=asc`).then(checkStatus).then(parseJSON);
	},

	find(id: number): Promise<RequestLine[]> {
		return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
	},

	

	delete(id: number) {
		return fetch(`${url}/delete/${id}`, { method: "DELETE" }).then(checkStatus);
	},

	post(requestLine: RequestLine) {
		return fetch(`${url}`, {
			method: "POST",
			body: JSON.stringify(requestLine, replacer),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(checkStatus)
			.then(parseJSON);
	},

	put(requestLine: RequestLine) {
		return fetch(`${url}/${requestLine.id}`, {
			method: "PUT",
			body: JSON.stringify(requestLine),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(checkStatus)
			.then(parseJSON);
	},

	insert(requestLine: RequestLine) {
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestLine),
		})
			.then(checkStatus)
			.then(parseJSON);
	},

	defaultValues(requestLine: RequestLine): import("./RequestLine").RequestLine[] {
		throw new Error("Function not implemented.");
	}
};
