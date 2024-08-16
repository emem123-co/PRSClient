import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useNavigate } from "react-router-dom";
import { Vendor } from "./Vendor";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { vendorAPI } from "./VendorAPI";

function VendorForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Vendor>();

	const [busy, setBusy] = useState(false);
	const [error, setError] = useState(undefined);
	const navigate = useNavigate();

	async function save(vendor: Vendor) {
		try {
			setBusy(true);
			let newVendor = await vendorAPI.post(vendor);
			// navigate("/vendors");
		} catch (error: any) {
			setError(error.message);
		} finally {
			setBusy(false);
		}
	}

	return (
		<>
		
			<div className=" d-flex justify-content-center">
				<div className="card shadow-lg w-100 p-3 border-1 fw-light fs-6">
					{busy && <p>Saving...</p>}
					{error && <div className="alert alert-danger">{error}</div>}
					<form className="d-flex flex-column" onSubmit={handleSubmit(save)}>
						<label className="pb-1 form-label" htmlFor="name">
							Vendor Name
						</label>
						<input
							className={`border form-control ${errors.name ? "is-invalid" : ""}`}
							{...register("name", { required: "Vendor name is required." })}
							type="text"
							id="name"
						/>
						{errors.name && <div className="invalid-feedback"> {errors.name?.message}</div>}

						<label className="pt-3 pb-1 form-label" htmlFor="address">
							Vendor Address
						</label>
						<input
							className={`border form-control ${errors.address ? "is-invalid" : ""}`}
							{...register("address", { required: "Vendor address is required." })}
							type="text"
							id="address"
						/>
						{errors.address && <div className="invalid-feedback">{errors.address?.message}</div>}

						<label className="pt-3 pb-1 form-label" htmlFor="city">
							Vendor City
						</label>
						<input
							className={`border form-control ${errors.city ? "is-invalid" : ""}`}
							{...register("city", { required: "Vendor city is required." })}
							type="text"
							id="city"
						/>
						{errors.city && <div className="invalid-feedback">{errors.city?.message}</div>}

						<label
							className="pt-3 pb-1 form-label"
							htmlFor="state"
							{...register("state", { required: "Vendor state is required." })}
						>
							State
						</label>
						<input
							className={`border form-control ${errors.state ? "is-invalid" : ""}`}
							{...register("state", { required: "Vendor state is required." })}
							type="text"
							id="state"
						/>
						{errors.state && <div className="invalid-feedback">{errors.state?.message}</div>}

						<label className="pt-3 pb-1 form-label" htmlFor="zip">
							Zip
						</label>
						<input
							className={`border form-control ${errors.zip ? "is-invalid" : ""}`}
							{...register("zip", { required: "Vendor zip code is required." })}
							type="text"
							id="zip"
						/>
						{errors.zip && <div className="invalid-feedback">{errors.zip?.message}</div>}

						<label className="pt-3 pb-1 form-label" htmlFor="phone">
							Phone
						</label>
						<input className="border form-control" {...register("phone")} type="text" id="phone" />

						<label className="pt-3 pb-1 form-label" htmlFor="email">
							Email
						</label>
						<input className="border form-control" {...register("email")} type="text" id="email" />

						<div className="d-flex justify-content-end gap-3 pt-3">
							<button  type="submit" className="btn btn-primary fw-light fs-6">
								Save
							</button>
							<Link className="btn btn-outline-secondary fw-light fs-6 border" to={"/vendors"}>
								Cancel
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default VendorForm;
