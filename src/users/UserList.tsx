import { useEffect, useState } from "react";
import { User } from "./User";
import { userAPI } from "./UserAPI";
import { Link } from "react-router-dom";

function UserList() {
	const [users, setUsers] = useState<User[]>([]);
	const [busy, setBusy] = useState(false);

	async function loadUsers() {
		setBusy(true);
		let data = await userAPI.list();
		setUsers(data);
		setBusy(false);
	}

	useEffect(() => {
		loadUsers();
	}, []);

	return (
		<section className=" container-fluid bg-white d-flex flex-wrap gap-4">
			{busy && (
				<div className="d-flex justify-content-center align-items-center w-100 vh-100">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}

			{users.map((user) => (
				<div className="d-flex gap-4 p-4 align-items-center" style={{ width: "25rem" }} key={user.id}>
					<div style={{width: "6rem", height: "6rem"}}className="px-5 d-flex rounded-circle bg-secondary text-white fs-4 align-items-center justify-content-center">
						<span>{Array(user.firstName[0])}</span><span>{Array(user.lastName[0])}</span>
					</div>
					<div>
					{/* {currentUser === isAdmin && } */}
					<p className="m-0">{user.firstName} {user.lastName}</p>
					<div className="d-flex gap-2">
						{user.isAdmin && <small className=" text-bg-dark text-white rounded-2 p-1 px-2">ADMIN</small>}
						{user.isReviewer && <small className=" text-bg-secondary text-white rounded-2 p-1 px-2">REVIEWER</small>}
					</div>
					<small className="pt-2">
						{user.phone}
					</small>
					{/* <div className=" dropdown-menu-end">
						<Link to={`/users/edit/${user.id}`}>edit</Link> | <Link to={`/users/delete/${user.id}`}>delete</Link>
					</div> */}
					</div>
				</div>
			))}
		</section>
	);
}

export default UserList;
