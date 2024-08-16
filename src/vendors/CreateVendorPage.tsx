import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import VendorForm from "./VendorForm";
import { Link } from "react-router-dom";

function CreateVendorPage() {
	return (
		<>
			<section className="container-fluid bg-white">
				<div className="d-flex justify-content-between align-items-center m-0 px-1">
					<h4 className="m-0 fw-light fs-5">ADD VENDOR</h4>
					<Link className="btn btn-primary fw-light fs-6" to="/vendors">
						CANCEL
					</Link>
				</div>

				<div className="p-4">
					<VendorForm />
				</div>
			</section>
		</>
	);
}
export default CreateVendorPage;
