import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link } from "react-router-dom";
import VendorList from "./VendorList";
import toast from "react-hot-toast";

function VendorListPage() {

	
	return (
		<>
			<div>
				<section className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<div className="m-0 fw-normal fs-5">Vendors</div>
						<Link className="btn btn-primary fw-light fs-6" to="./create">
							+ Vendor
						</Link>
					</div>
					<hr />
					<div className="pt-2">
						<VendorList />
					</div>
				</section>
			</div>
		</>
	);
}

export default VendorListPage;
