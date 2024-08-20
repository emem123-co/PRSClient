import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Vendor } from "./Vendor";
import { useForm } from "react-hook-form";
import { vendorAPI } from "./VendorAPI";
import toast from "react-hot-toast";

function VendorForm() {
	const navigate = useNavigate();
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Vendor>({});

	async function save(vendor: Vendor) {
		await vendorAPI.post(vendor);

		toast.success("Success!");
		navigate("/vendors");
	}

	return (
		<>
			<div className="d-flex fw-normal fs-6">
				<form className="d-flex flex-wrap flex-row w-75" onSubmit={handleSubmit(save)}>
					<div className="d-flex w-100 gap-3 ">
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
							<div className="invalid-feedback">
								{errors.name?.message}
							</div>
						</div>

						<div className="d-flex flex-column w-100">

							<label className="form-label" htmlFor="code">
								Vendor Code
							</label>
							<input
								className={`form-control ${errors.code ? "is-invalid" : ""}`}
								{...register("code", { required: "Please create vendor code" })}
								type="text"
								id="code"
							/>
							<div className="invalid-feedback">
								{errors.code?.message}
							</div>
						</div>
					</div>

					<div className="row-2 d-flex flex-column w-100">
						<label className="pt-3 form-label" htmlFor="address">
							Vendor Address
						</label>
						<input
							className={`form-control ${errors.address ? "is-invalid" : ""}`}
							{...register("address", { required: "Vendor address is required." })}
							type="text"
							id="address"
						/>
						<div className="invalid-feedback">
							{errors.address?.message}
						</div>
					</div>

					<div className="row-3 pt-3 gap-3  d-flex flex-row w-100">
						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="city">
								City
							</label>
							<input
								className={`form-control ${errors.city ? "is-invalid" : ""}`}
								{...register("city", { required: "Vendor city is required." })}
								type="text"
								id="city"
							/>
							<div className="invalid-feedback">
								{errors.city?.message}
							</div>
						</div>

						<div className="d-flex flex-column w-100">
							<label
								className="form-label"
								htmlFor="state">
								State
							</label>
							<input
								className={`form-control ${errors.state ? "is-invalid" : ""}`}
								{...register("state", { required: "Vendor state is required." })}
								type="text"
								id="state"
							/>
							<div className="invalid-feedback">
								{errors.state?.message}
							</div>
						</div>

						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="zip">
								Zip
							</label>
							<input
								className={`form-control ${errors.zip ? "is-invalid" : ""}`}
								{...register("zip", { required: "Vendor zip code is required." })}
								type="text"
								id="zip"
							/>
							<div className="invalid-feedback">
								{errors.zip?.message}
							</div>
						</div>
					</div>

					<div className="pt-3 gap-3 row-4 d-flex flex-row w-100">
						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="phone">
								Phone
							</label>
							<input className={`form-control ${errors.phone ? "is-invalid" : ""}`}
							{...register("phone")} type="text" id="phone" />
							<div className="invalid-feedback">
								{errors.phone?.message}
							</div>
						</div>

						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="email">
								Email
							</label>
							<input className={`form-control ${errors.email ? "is-invalid" : ""}`}
							{...register("email")} type="text" id="email" />
							<div className="invalid-feedback">
								{errors.email?.message}
							</div>
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
