//New RequestLine -> will be added with the requestID
//product dropdown
//price autorenders depdning on product
//total autoupdates and renders in real time

import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

function RequestLinesForm() {
	

	return (
		<>
			<div className="d-flex fw-normal fs-6">
				<form className="d-flex flex-wrap flex-row w-75" onSubmit={}>
					<div className="d-flex row-1 gap-3 w-100">
						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="name">
								Request Name
							</label>
							<input
								className={`form-control ${errors.name ? "is-invalid" : ""}`}
								{...register("name", { required: "Request name is required." })}
								type="text"
								id="name"
							/>
							<div className="invalid-feedback">{errors.name?.message}</div>
						</div>

						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="partNbr">
								Part Number
							</label>
							<input
								className={`form-control ${errors.partNbr ? "is-invalid" : ""}`}
								{...register("partNbr", { required: "Part number is required." })}
								type="text"
								id="partNbr"
							/>
							<div className="invalid-feedback">{errors.partNbr?.message}</div>
						</div>
					</div>

					<div className="pt-3 gap-3 row-2 d-flex flex-row w-100">
						<div className="d-flex flex-column">
							<label className="form-label" htmlFor="price">
								Price
							</label>
							<input
								className={`form-control ${errors.price ? "is-invalid" : ""}`}
								{...register("price", { required: "Price is required." })}
								type="text"
								id="price"
							/>
							<div className="invalid-feedback">{errors.price?.message}</div>
						</div>

						<div className="d-flex">
							<div className="d-flex flex-column">
								<label className="form-label" htmlFor="unit" {...register("unit", { required: "Unit is required." })}>
									Unit
								</label>
								<input
									className={`form-control ${errors.unit ? "is-invalid" : ""}`}
									{...register("unit", { required: "Unit is required." })}
									type="text"
									id="unit"
								/>
								<div className="invalid-feedback">{errors.unit?.message}</div>
							</div>

							<div className="w-50 align-content-end ps-3">
								<label className="align-content-center" htmlFor="vendorId"></label>
								<select
									id="vendorId"
									className={`form-select dropdown ${errors.vendorId ? "is-invalid" : ""}`}
									{...register("vendorId", { required: "Please choose vendor(s)." })}
								>
									<option value="">Select vendor...</option>
									{vendors.map((vendor) => (
										<option className=" dropdown-item" key={vendor.id} value={vendor.id}>
											<>{vendor.name}</>
										</option>
									))}
								</select>
								<div className="Please choose vendor(s).">{errors?.vendorId?.message}</div>
							</div>
						</div>
					</div>

					<div className="pt-3 gap-3 row-3 d-flex flex-row w-100">
						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="photoPath">
								Add Photo
							</label>
							<input className="form-control" {...register("photoPath")} type="text" id="photoPath" />
						</div>
					</div>

					<div className="pt-4 gap-3 row-5 d-flex flex-row w-100  justify-content-end ">
						<div className="d-flex gap-3 pt-3">
							<Link className="btn btn-outline-secondary fw-light fs-6 border" to={"/requests"}>
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

export default RequestLinesForm;

function register(arg0: string, arg1: { required: string; }): import("react/jsx-runtime").JSX.IntrinsicAttributes & import("react").ClassAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLInputElement> {
	throw new Error("Function not implemented.");
}
