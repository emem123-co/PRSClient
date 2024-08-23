import { BASE_URL, checkStatus, parseJSON } from "../utility/fetchUtilities";
import { User } from "./User";

const url = `${BASE_URL}/users`;

function replacer(key: string, value: any) {
	if (key === "") return undefined;
	return value;
}


export const userAPI = {
	list() {
		return fetch(`${url}?_sort=name&_order=asc`).then(checkStatus).then(parseJSON);
	},

	find(id: number) {
		return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
	},

	delete(id: number) {
		return fetch(`${url}/delete/${id}`, { method: "DELETE" }).then(checkStatus);
	},

	post(user: User) {
		return fetch(`${url}`, {
		  method: "POST",
		  body: JSON.stringify(user),
		  headers: {
			 "Content-Type": "application/json",
		  },
		})
		  .then(checkStatus)
		  .then(parseJSON);
	 },
  
	 put(user: User) {
		return fetch(`${url}/${user.id}`, {
		  method: "PUT",
		  body: JSON.stringify(user, replacer),

		  headers: {
			 "Content-Type": "application/json",
		  },
		}).then(checkStatus)
	 },

	 insert(user: User) {
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(user)
		}).then(checkStatus).then(parseJSON);
			},

	
		
	 

  findByAccount(username: string, password: string): Promise<User> {
    return (
      fetch(`${url}/${username}/${password}`)
        .then(checkStatus)
        .then(parseJSON)
        //delete the next three lineswhen using PRS API because it will only return one user not an array with one user
        .then((users) => {
          return users[0] ?? undefined;
        })
    );
  },
};