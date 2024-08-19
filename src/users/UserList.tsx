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
				<div className="card p-4" key={user.id}>
					<strong className="d-flex flex-column">
						<div className="d-flex flex-column w-50">
							{user.isAdmin && <span className="text-info">ADMIN</span>}
							{user.isReviewer && <span className=" text-bg-info text-white">REVIEWER</span>}
						</div>
						<br />
						{user.lastName}, {user.firstName}
					</strong>
					<small>{user.userName}</small>
					<small>
						{user.email} | {user.phone}
					</small>
					{/* {currentUser === isAdmin && } */}
					<span>
						<Link to={`/users/edit/${user.id}`}>edit</Link> | <Link to={`/users/delete/${user.id}`}>delete</Link>
					</span>
				</div>
			))}
		</section>
	);
}

export default UserList;
