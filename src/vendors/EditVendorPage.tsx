import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import { vendorAPI } from "./VendorAPI";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Vendor } from "./Vendor";
import VendorForm from "./VendorForm";

function EditVendorPage() {
	let { vendorId: vendorIdAsString } = useParams<{ vendorId: string }>();
	let vendorId = Number(vendorIdAsString);
	const navigate = useNavigate();
	const [vendor, setVendor] = useState<Vendor[]>([]);

	const {
		formState: {  },
	} = useForm<Vendor>({
		defaultValues: async () => {
			let vendorData = await vendorAPI.list();
			setVendor(vendorData);

			if (!vendorId) {
				let newVendor = new Vendor(vendorId);
				return Promise.resolve(newVendor);
			} else {
				return await vendorAPI.find(vendorId);
			}
		},
	});

	
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
					<VendorForm />
						
					</div>
				</section>
			</div>
		</>
	);
}
export default EditVendorPage;
