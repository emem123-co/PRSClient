import { useEffect, useState } from "react";
import { Vendor } from "./Vendor";
import { vendorAPI } from "./VendorAPI";
import { Link } from "react-router-dom";

function VendorList() {
	const [vendors, setVendors] = useState<Vendor[]>([]);
	const [busy, setBusy] = useState(false);

	async function loadVendors() {
		setBusy(true);
		let data = await vendorAPI.list();
		setVendors(data);
		setBusy(false);
	}

	useEffect(() => {
		loadVendors();
	}, []);

	return (
		<section className=" container-fluid bg-white d-flex flex-wrap gap-4">
			{busy && (
				<div className="d-flex justify-content-center align-items-center w-100 vh-100">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}

			{vendors.map((vendor) => (
				<div className="card p-4" key={vendor.id}>
					<strong>{vendor.name}</strong>
					<small>{vendor.address}</small>
					<small>
						{vendor.city}, {vendor.state}
					</small>
					<small>{vendor.zip}</small>
					<small>{vendor.phone}</small>
					<small>{vendor.email}</small>
					<span>
						<Link to={`/vendors/edit/${vendor.id}`}>edit</Link> |{" "}
						<Link to={`/vendors/delete/${vendor.id}`}>delete</Link>
					</span>
				</div>
			))}
		</section>
	);
}

export default VendorList;
