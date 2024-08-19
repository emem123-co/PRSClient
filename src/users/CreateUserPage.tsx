import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import UserForm from "./UserForm";
import { Link } from "react-router-dom";

function CreateUserPage() {
	return (
		<>
		<div>
				<section className="container-fluid bg-white">
					<p className="d-flex justify-content-between align-items-center m-0 px-1">
						<h4 className="m-0 fw-normal fs-5">Add User</h4>
						<Link className="btn btn-outline-danger fw-normal fs-6" to="./users">
							Cancel
						</Link>
					</p>
					<hr/>
					<div className="pt-2">
						<UserForm />
					</div>
				</section>
			</div>
		</>
	);
}
export default CreateUserPage;
