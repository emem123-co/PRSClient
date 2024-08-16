import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link } from "react-router-dom";
import VendorList from "./VendorList";

function VendorListPage() {
	return (
		<>
			<div>
				<section className="container-fluid bg-white">
					<p className="d-flex justify-content-between align-items-center m-0 px-1">
						<h4 className="m-0 fw-light fs-5">VENDORS</h4>
						<Link className="btn btn-primary fw-light fs-6" to="./create">
							ADD VENDOR
						</Link>
					</p>
					<div className="pt-4">
						<VendorList />
					</div>
				</section>
			</div>
		</>
	);
}

export default VendorListPage;
