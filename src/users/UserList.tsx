import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
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
		<section className=" container-fluid bg-white d-flex flex-wrap gap-4 align-content-center">
			{busy && (
				<div className="d-flex justify-content-center align-items-center w-100 vh-100">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}

			{users.map((user) => (
				<div
					className="d-flex p-3 gap-4 align-items-center"
					style={{ width: "20rem" }}
					key={user.id}
				>
					<div
						style={{ width: "2rem", height: "6rem" }}
						className="px-5 d-flex rounded-circle bg-secondary text-white fs-4 align-items-center justify-content-center"
					>
						<span>{Array(user.firstName[0])}</span>
						<span>{Array(user.lastName[0])}</span>
					</div>
					<div>

						{/* <div className="d-flex"> */}
						<p className="m-0 fs-5 fw-semibold">
							{user.firstName} {user.lastName}
						</p>

						{/* <div className="dropdown">
							<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"className="">
								insert icon
							</button>
								
							<div className="dropdown-menu" aria-labelledby="dLabel">
								<Link className="dropdown-item" to="./users/edit">edit</Link>
								<button className="dropdown-item" type="button">delete</button>
							</div>
						</div> */}
						{/* </div> */}


						<div className="d-flex gap-2 py-1">
							{user.isAdmin && <small className="border border-secondary text-dark rounded-2 p-1 px-2">Admin</small>}
							{user.isReviewer && <small className=" bg-body-secondary text-black rounded-2 p-1 px-2">Reviewer</small>}
							{!user.isReviewer && !user.isAdmin && (
								<small style={{ fontStyle: "italic" }} className="rounded-2">
									No role assigned
								</small>
							)}
						</div>
						<small className="">{user.phone}</small>
						<div className="d-flex gap-2">
						<Link to={`/users/edit/${user.id}`}>edit</Link> | <Link to={`/users/delete/${user.id}`}>delete</Link>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

export default UserList;
