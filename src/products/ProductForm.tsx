import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link } from "react-router-dom";
import { Product } from "./Product";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { productAPI } from "./ProductAPI";
import { Vendor } from "../vendors/Vendor";

function VendorForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Product>();

	const [busy, setBusy] = useState(false);
	const [error, setError] = useState(undefined);
	// const navigate = useNavigate();

	async function save(product: Product) {
		try {
			setBusy(true);
			let newVendor = await productAPI.post(product);
			toast.success("Success!");
			// navigate("/products");
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
					<div className="d-flex row-1 gap-3 w-100">
						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="name">
								Product Name
							</label>
							<input
								className={`form-control ${errors.name ? "is-invalid" : ""}`}
								{...register("name", { required: "Product name is required." })}
								type="text"
								id="name"
							/>
							{errors.name && <div className="invalid-feedback"> {errors.name?.message}</div>}
						</div>

						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="partNbr">
								Part Number
							</label>
							<input
								className={`border form-control ${errors.partNbr ? "is-invalid" : ""}`}
								{...register("partNbr", { required: "Part number is required." })}
								type="text"
								id="partNbr"
							/>
							{errors.partNbr && <div className="invalid-feedback">{errors.partNbr?.message}</div>}
						</div>
					</div>

					<div className="pt-3 gap-3 row-2 d-flex flex-row w-100">
						<div className="d-flex flex-column">
							<label className="form-label" htmlFor="price">
								Price
							</label>
							<input
								className={`border form-control ${errors.price ? "is-invalid" : ""}`}
								{...register("price", { required: "Price is required." })}
								type="text"
								id="price"
							/>
							{errors.price && <div className="invalid-feedback">{errors.price?.message}</div>}
						</div>

						<div className="d-flex">
							<div className="d-flex flex-column">
								<label className="form-label" htmlFor="unit" {...register("unit", { required: "Unit is required." })}>
									Unit
								</label>
								<input
									className={`border form-control ${errors.unit ? "is-invalid" : ""}`}
									{...register("unit", { required: "Unit is required." })}
									type="text"
									id="state"
								/>
								{errors.unit && <div className="invalid-feedback">{errors.unit?.message}</div>}
							</div>

							<div className="w-50 align-content-end ps-3">
								<label className="align-content-center" htmlFor="vendors"></label>
								<select
									id="vendors"
									className={`form-select dropdown ${errors.vendors ? "is-invalid" : ""}`}
									{...register("vendors", { required: "Please choose vendor(s)." })}
								>
									<option>Select vendor...</option>
									{[].map((vendor: Vendor) => (
										<option className=" dropdown-item" key={vendor.id}>
											<div>{vendor.name}</div>
										</option>
									))}
								</select>
								{errors.vendors && <div className="Please choose vendor(s).">{errors.vendors?.message}</div>}
							</div>
						</div>
					</div>

					<div className="pt-3 gap-3 row-3 d-flex flex-row w-100">
						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="photo">
								Add Photo
							</label>
							<input className="border form-control" {...register("photoPath")} type="text" id="photoPath" />
						</div>
					</div>

					<div className="pt-4 gap-3 row-5 d-flex flex-row w-100  justify-content-end ">
						<div className="d-flex gap-3 pt-3">
							<Link className="btn btn-outline-secondary fw-light fs-6 border" to={"/products"}>
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
