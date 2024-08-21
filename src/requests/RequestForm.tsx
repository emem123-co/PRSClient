// import "bootstrap/dist/css/bootstrap.min.css";
// import "../App";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import { Request } from "./Request";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { productAPI } from "./RequestAPI";
// import { Vendor } from "../vendors/Vendor";
// import { vendorAPI } from "../vendors/VendorAPI";

// function RequestForm() {
// 	let { productId: productIdAsString } = useParams<{ productId: string }>();
// 	let { vendorId: vendorIdAsString } = useParams<{ vendorId: string }>();
// 	let productId = Number(productIdAsString);
// 	let vendorId = Number(vendorIdAsString);
// 	const [vendors, setVendors] = useState<Vendor[]>([]);

// 	const navigate = useNavigate();

// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 	} = useForm<Request>({
// 		defaultValues: async () => {
// 			let vendorsData = await vendorAPI.list();
// 			setVendors(vendorsData);

// 			if (!productId) {
// 				let newRequest = new Request({ vendorId: vendorId });
// 				return Promise.resolve(newRequest);
// 			} else {
// 				return await productAPI.find(vendorId);
// 			}
// 		},
// 	});

// 	const save: SubmitHandler<Request> = async (product) => {
// 		try {
// 			if (product.isNew) {
// 				await productAPI.post(product);
// 				navigate("/requests");
// 				toast.success("Success!");
// 			} else {
// 				await productAPI.put(product);
// 			}
// 		} catch (error: any) {
// 			toast.error(error.message);
// 		}
// 	};

// 	return (
// 		<>
// 			<div className="d-flex fw-normal fs-6">
// 				<form className="d-flex flex-wrap flex-row w-75" onSubmit={handleSubmit(save)}>
// 					<div className="d-flex row-1 gap-3 w-100">
// 						<div className="d-flex flex-column w-100">
// 							<label className="form-label" htmlFor="name">
// 								Request Name
// 							</label>
// 							<input
// 								className={`form-control ${errors.name ? "is-invalid" : ""}`}
// 								{...register("name", { required: "Request name is required." })}
// 								type="text"
// 								id="name"
// 							/>
// 							<div className="invalid-feedback">
// 								{errors.name?.message}
// 							</div>
// 						</div>

// 						<div className="d-flex flex-column w-100">
// 							<label className="form-label" htmlFor="partNbr">
// 								Part Number
// 							</label>
// 							<input
// 								className={`form-control ${errors.partNbr ? "is-invalid" : ""}`}
// 								{...register("partNbr", { required: "Part number is required." })}
// 								type="text"
// 								id="partNbr"
// 							/>
// 							<div className="invalid-feedback">
// 								{errors.partNbr?.message}
// 							</div>
// 						</div>
// 					</div>

// 					<div className="pt-3 gap-3 row-2 d-flex flex-row w-100">
// 						<div className="d-flex flex-column">
// 							<label className="form-label" htmlFor="price">
// 								Price
// 							</label>
// 							<input
// 								className={`form-control ${errors.price ? "is-invalid" : ""}`}
// 								{...register("price", { required: "Price is required." })}
// 								type="text"
// 								id="price"
// 							/>
// 							<div className="invalid-feedback">
// 								{errors.price?.message}
// 							</div>
// 						</div>

// 						<div className="d-flex">
// 							<div className="d-flex flex-column">
// 								<label className="form-label" htmlFor="unit" {...register("unit", { required: "Unit is required." })}>
// 									Unit
// 								</label>
// 								<input
// 									className={`form-control ${errors.unit ? "is-invalid" : ""}`}
// 									{...register("unit", { required: "Unit is required." })}
// 									type="text"
// 									id="unit"
// 								/>
// 								<div className="invalid-feedback">
// 									{errors.unit?.message}
// 								</div>
// 							</div>

// 							<div className="w-50 align-content-end ps-3">
// 								<label className="align-content-center" htmlFor="vendorId"></label>
// 								<select
// 									id="vendorId"
// 									className={`form-select dropdown ${errors.vendorId ? "is-invalid" : ""}`}
// 									{...register("vendorId", { required: "Please choose vendor(s)." })}
// 								>
// 									<option value="">Select vendor...</option>
// 									{vendors.map((vendor) => (
// 										<option className=" dropdown-item" key={vendor.id} value={vendor.id}>
// 											<>{vendor.name}</>
// 										</option>
// 									))}
// 								</select>
// 								<div className="Please choose vendor(s).">
// 									{errors?.vendorId?.message}
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="pt-3 gap-3 row-3 d-flex flex-row w-100">
// 						<div className="d-flex flex-column w-100">
// 							<label className="form-label" htmlFor="photoPath">
// 								Add Photo
// 							</label>
// 							<input className="form-control" {...register("photoPath")} type="text" id="photoPath" />
// 						</div>
// 					</div>

// 					<div className="pt-4 gap-3 row-5 d-flex flex-row w-100  justify-content-end ">
// 						<div className="d-flex gap-3 pt-3">
// 							<Link className="btn btn-outline-secondary fw-light fs-6 border" to={"/requests"}>
// 								Cancel
// 							</Link>
// 							<button type="submit" className="btn btn-primary fw-light fs-6">
// 								Save
// 							</button>
// 						</div>
// 					</div>
// 				</form>
// 			</div>
// 		</>
// 	);
// }

// export default RequestForm;
