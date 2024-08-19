import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link } from "react-router-dom";
import { Product } from "./Product";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { productAPI } from "./ProductAPI";
import toast from "react-hot-toast";

function VendorForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Vendor>();

	const [busy, setBusy] = useState(false);
	const [error, setError] = useState(undefined);
	// const navigate = useNavigate();

	async function save(vendor: Vendor) {
		try {
			setBusy(true);
			let newVendor = await vendorAPI.post(vendor);
			toast.success("Success!")
			// navigate("/vendors");
		} catch (error: any) {
			setError(error.message);
		} finally {
			setBusy(false);
		}
	}

	return (
		<>
			<div className="d-flex fw-normal fs-6">
				{busy && <p>Saving...</p>}
				{error && <div className="alert alert-danger">{error}</div>}
				<form className="d-flex flex-wrap flex-row w-75" onSubmit={handleSubmit(save)}>
					<div className="row-1 d-flex flex-column w-100">
						<label className="form-label" htmlFor="name">
							Vendor Name
						</label>
						<input
							className={`form-control ${errors.name ? "is-invalid" : ""}`}
							{...register("name", { required: "Vendor name is required." })}
							type="text"
							id="name"
						/>
						{errors.name && <div className="invalid-feedback"> {errors.name?.message}</div>}
					</div>

					<div className="row-2 d-flex flex-column w-100">
						<label className="pt-3 form-label" htmlFor="address">
							Vendor Address
						</label>
						<input
							className={`border form-control ${errors.address ? "is-invalid" : ""}`}
							{...register("address", { required: "Vendor address is required." })}
							type="text"
							id="address"
						/>
						{errors.address && <div className="invalid-feedback">{errors.address?.message}</div>}
					</div>

					<div className="pt-3 gap-3 row-3 d-flex flex-row w-100">
						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="city">
								City
							</label>
							<input
								className={`border form-control ${errors.city ? "is-invalid" : ""}`}
								{...register("city", { required: "Vendor city is required." })}
								type="text"
								id="city"
							/>
							{errors.city && <div className="invalid-feedback">{errors.city?.message}</div>}
						</div>

						<div className="d-flex flex-column w-100">
							<label
								className="form-label"
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
						</div>

						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="zip">
								Zip
							</label>
							<input
								className={`border form-control ${errors.zip ? "is-invalid" : ""}`}
								{...register("zip", { required: "Vendor zip code is required." })}
								type="text"
								id="zip"
							/>
							{errors.zip && <div className="invalid-feedback">{errors.zip?.message}</div>}
						</div>
					</div>

					<div className="pt-3 gap-3 row-4 d-flex flex-row w-100">
						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="phone">
								Phone
							</label>
							<input className="border form-control" {...register("phone")} type="text" id="phone" />
						</div>

						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="email">
								Email
							</label>
							<input className="border form-control" {...register("email")} type="text" id="email" />
						</div>
					</div>

					<div className="pt-4 gap-3 row-5 d-flex flex-row w-100  justify-content-end ">
						<div className="d-flex gap-3 pt-3">
							<Link className="btn btn-outline-secondary fw-light fs-6 border" to={"/vendors"}>
								Cancel
							</Link>
							<button type="submit" className="btn btn-primary fw-light fs-6">
								Save
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default VendorForm;
