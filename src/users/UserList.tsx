import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { SyntheticEvent, useEffect, useState } from "react";
import { User } from "./User";
import { userAPI } from "./UserAPI";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

interface UserListProps {
	user: User;
	onRemove: (user: User) => void;
}

function UserList({ user, onRemove }: UserListProps) {
	const [users, setUsers] = useState<User[]>([]);
	const [busy, setBusy] = useState(false);

	async function loadUsers() {
		try {
			setBusy(true);
			let data = await userAPI.list();
			setUsers(data);
			setBusy(false);
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setBusy(false);
		}
	}

	useEffect(() => {
		loadUsers();
	}, []);

	

	return (
		<section className=" container-fluid bg-white d-flex flex-wrap gap-4 align-content-center">
			{busy && (
				<div className="d-flex justify-content-center align-items-center w-100 vh-100">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}
{user.userName}
			{users.map((user) => (
				<div className="d-flex p-3 gap-4 align-items-center" style={{ width: "25rem" }} key={user.id}>
					<div
						style={{ width: "2rem", height: "6rem" }}
						className="px-5 d-flex rounded-circle bg-secondary text-white fs-4 align-items-center justify-content-center "
					>
						<span>{Array(user.firstName[0])}</span>
						<span>{Array(user.lastName[0])}</span>
					</div>

					<div>
						<section className="d-flex gap-2">
							<p className="m-0 fs-5 fw-semibold" style={{ width: 180 }}>
								{user.firstName} {user.lastName}
							</p>
						</section>
						<div className="d-flex gap-2 py-2">
							{user.isAdmin && <small className="border border-secondary text-dark rounded-2 p-1 px-2">Admin</small>}
							{user.isReviewer && <small className=" bg-body-secondary text-black rounded-2 p-1 px-2">Reviewer</small>}
							{!user.isReviewer && !user.isAdmin && (
								<small style={{ fontStyle: "italic" }} className="rounded-2">
									No role assigned
								</small>
							)}
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-telephone-fill pb-1"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
							/>
						</svg>
						<span className="ps-1 m-0">{user.phone}</span>

						<div className="d-flex gap-2">
							<Link
								className="small"
								to={`./edit/${user.id}`}
								
							>
								edit
							</Link>{" "}
							|{" "}
							<a className="small"
								
								onClick={(event: SyntheticEvent) => {
									event.preventDefault();
									onRemove(user);
								}}>
								delete
							</a>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

export default UserList;
