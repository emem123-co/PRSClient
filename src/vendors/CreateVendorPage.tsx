import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import VendorForm from "./VendorForm";
import { Link } from "react-router-dom";

function CreateVendorPage() {
	return (
		<>
		<div>
				<section className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<div className="m-0 fw-normal fs-5">Add Vendor</div>
						<Link className="btn btn-outline-danger fw-normal fs-6" to="./vendors">
							Cancel
						</Link>
					</div>
					<hr/>
					<div className="pt-2">
						<VendorForm />
					</div>
				</section>
			</div>
		</>
	);
}
export default CreateVendorPage;
