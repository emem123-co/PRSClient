import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import VendorForm from "./UserForm";
import { Link } from "react-router-dom";

function EditVendorPage() {
	return (
		<>
			<div>
				<section className="container-fluid bg-white">
					<p className="d-flex justify-content-between align-items-center m-0 px-1">
						<h4 className="m-0 fw-normal fs-5">Edit User</h4>
						<Link className="btn btn-outline-danger fw-normal fs-6" to="./vendors">
							Cancel
						</Link>
					</p>
					<hr />
					<div className="pt-2">
						<VendorForm />
					</div>
				</section>
			</div>
		</>
	);
}
export default EditVendorPage;