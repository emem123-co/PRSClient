import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import VendorForm from "./VendorForm";
import { Link } from "react-router-dom";

function EditVendorPage() {
	return (
		<>
			<div>
				<section className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<div className="m-0 fw-normal fs-5">Edit Vendor</div>
						<Link className="btn btn-outline-danger fw-normal fs-6" to="./vendors">
							Cancel
						</Link>
					</div>
					<hr />
					<div className="pt-2">
					{/* <VendorForm /> */}
						{/* copy in vendor form and place value={vendor.prop} attributes on the input tags to populate the current vendor */}
					</div>
				</section>
			</div>
		</>
	);
}
export default EditVendorPage;
