import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { useState, useEffect } from "react";
import VendorForm from "./VendorForm";
import { Link } from "react-router-dom";

function EditVendorPage() {
	return (
		<>
			<section className="container-fluid bg-white">
				<p className="d-flex justify-content-between align-items-center m-0 px-1">
					<h4 className="m-0 fw-light fs-5">EDIT VENDOR</h4>
					<Link className="btn btn-primary fw-light fs-6" to="/vendors">
						CANCEL
					</Link>
				</p>

				<div className="p-4">
					<VendorForm />
				</div>
			</section>
		</>
	);
}
export default EditVendorPage;
