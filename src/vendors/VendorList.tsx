import { SyntheticEvent, useEffect, useState } from "react";
import { Vendor } from "./Vendor";
import { vendorAPI } from "./VendorAPI";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import VendorCard from "./VendorCard";

function VendorList() {
	const [vendors, setVendors] = useState<Vendor[]>([]);
	const [busy, setBusy] = useState(false);
	const navigate = useNavigate();

	async function loadVendors() {
		setBusy(true);
		let data = await vendorAPI.list();
		setVendors(data);
		setBusy(false);
	}

	useEffect(() => {
		loadVendors();
	}, []);

	async function removeVendor(vendor: Vendor) {
		if (confirm("Are you sure you want to delete this vendor?")) {
			if (vendor.id) {
				await vendorAPI.delete(vendor.id);
				let updatedRequests = vendor.filter((v: { id: number | undefined }) => v.id !== vendor.id);
				setVendors(updatedRequests);
				toast.success("Successfully deleted.");
				navigate("./vendors");
			}
		}
	}

	return (
		<section >

			<div>
				{busy && (
					<div className="d-flex justify-content-center align-items-center w-100 vh-100">
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				)}
			</div>

				<div className="container-fluid bg-white">
								<div className="card-group">
									{vendors.map((vendor) => (
										<div className="p-4"><VendorCard key={vendor.id} vendor={vendor} onRemove={removeVendor} /></div>
									))}
								</div>
				</div>
		</section>
	);
}

export default VendorList;
