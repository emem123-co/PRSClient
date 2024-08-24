import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useNavigate } from "react-router-dom";
import UserList from "./UserList";
import toast from "react-hot-toast";
import { User } from "./User";
import { userAPI } from "./UserAPI";
import { useEffect, useState } from "react";

function UserListPage() {
	const [users, setUsers] = useState<User[]>([]);
	const [busy, setBusy] = useState(false);
	const navigate = useNavigate();

	async function loadUsers() {
		try {
			setBusy(true);
			let data = await userAPI.list();
			setUsers(data);
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setBusy(false);
		}
	}

	useEffect(() => {
		loadUsers();
	}, []);

	async function removeUser(user: User) {
		if (confirm("Are you sure you want to delete this request?")) {
			if (user.id) {
				await userAPI.delete(user.id);
				let updatedUsers = users.filter((u) => u.id !== user.id);
				setUsers(updatedUsers);
				toast.success("Successfully deleted.");
				navigate("/users");
			}
		}
	}
	return (
		<>
			{busy && (
				<section className="d-flex justify-content-center align-items-center align-content-center vh-100">
					<div className=" spinner-border text-primary" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</section>
			)}
			<div>
				<section className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<div className="m-0 fw-normal fs-5">Users</div>
						<Link className="btn btn-primary fw-light fs-6" to="./create">
							+ User
						</Link>
					</div>
					<hr />

					<div className="pt-2">
						<UserList user={users} onRemove={removeUser} />
					</div>
				</section>
			</div>
		</>
	);
}

export default UserListPage;
