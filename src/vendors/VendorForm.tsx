import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function VendorForm() {
	return (
		<>
			<div className=" d-flex justify-content-center">
				<div className="card shadow-lg w-100 p-3 border-1 fw-light fs-6">
               
					<form className="d-flex flex-column">
						{/* <label htmlFor="vcode">Vendor Code</label>
						<input id="vcode" value={vendorId} /> */}

						<label className="pb-1" htmlFor="vname">Vendor Name</label>
						<input className="border" type="text" id="vname" />

						<label className="pt-3 pb-1" htmlFor="vaddress">Vendor Address</label>
						<input className="border" type="text" id="vaddress" />

						<label className="pt-3 pb-1" htmlFor="vcity">City</label>
						<input className="border" type="text" id="vcity" />

						<label className="pt-3 pb-1" htmlFor="vstate">State</label>
						<input className="border" type="text" id="vstate" />

						<label className="pt-3 pb-1" htmlFor="vzip">Zip</label>
						<input className="border" type="text" id="vzip" />

						<label className="pt-3 pb-1" htmlFor="vphone">Phone</label>
						<input className="border" type="text" id="vphone" />

						<label className="pt-3 pb-1" htmlFor="vemail">Email</label>
						<input className="border" type="text" id="vemail" />

                  <div className="d-flex justify-content-end gap-3 pt-3">
                     <Link type="submit " className="btn btn-primary fw-light fs-6" to={""}>Save</Link>
                     <Link className="btn btn-outline-secondary fw-light fs-6 border" to={"/vendors"}>Cancel</Link>
                  </div>
					</form>
				</div>
			</div>
		</>
	);
}
export default VendorForm;
