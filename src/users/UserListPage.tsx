import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link } from "react-router-dom";
import UserList from "./UserList";

function UserListPage() {
	return (
		<>
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
						<UserList />
					</div>
				</section>
			</div>
		</>
	);
}

export default UserListPage;
