//New RequestLine -> will be added with the requestID
//requestline dropdown
//price autorenders depdning on requestline
//total autoupdates and renders in real time

import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { RequestLine } from "../requestlines/RequestLine";
import { requestLineAPI } from "../requestlines/RequestLineAPI";
import { Product } from "../products/Product";
import { productAPI } from "../products/ProductAPI";
import { requestAPI } from "../requests/RequestAPI";

function RequestLineForm() {
	const navigate = useNavigate();
	let { requestLineId: requestLineIdAsString } = useParams<{ requestLineId: string }>();
	let { productId: productIdAsAString } = useParams<{ productId: string }>();
	let { requestId: requestIdAsAString } = useParams<{ requestId: string }>();


	let requestLineId = Number(requestLineIdAsString);
	let productId = Number(productIdAsAString);
	let requestId = Number(requestIdAsAString);

	const [products, setProducts] = useState<Product[]> ([]);
	const [request, setRequest] = useState<Request | undefined> (undefined);
	

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RequestLine>({
		defaultValues: async () => {
			
			let productData = await productAPI.list();
			let requestData = await requestAPI.find(requestId);
			setProducts(productData);
			setRequest(requestData);

			if (!requestLineId) {
				let newRequestLine = new RequestLine({requestId: requestId});
				return await Promise.resolve(newRequestLine);
			} else {
				return await requestLineAPI.find(requestLineId);
			}
			
		},
	});

	const saveRequestLine: SubmitHandler<RequestLine> = async (requestLine) => {
		try {
			if (requestLine.isNew) {
				await requestLineAPI.post(requestLine);
				navigate(`requests/detail/${requestId}`);
			} else {
				await requestLineAPI.put(requestLine);
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};
	return (
		<>
			<div className="d-flex fw-normal fs-6">
				<form className="d-flex flex-wrap flex-row w-75" onSubmit={handleSubmit(saveProduct)}>
					<div className="d-flex row-1 gap-3 w-100">



						<div className="d-flex flex-column w-100">
						<label className="align-content-center form-label" htmlFor="productID">
									Product
								</label>
								<select
									id="productID"
									className={`form-select dropdown ${errors.product?.name ? "is-invalid" : ""}`}
									{...register("productID", { required: "Please choose a product" })}
								>
									<option value="">Select vendor...</option>
									{products.map((product) => (
										<option className=" dropdown-item" key={product.id} value={product.id}>
											<>{product.name}</>
										</option>
									))}
								</select>
								<div className="invalid-feedback">{errors.product?.name?.message}</div>
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
								<label className="form-label" htmlFor="unit">
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
								<label className="align-content-center form-label" htmlFor="vendorId">
									Vendor
								</label>
								<select
									id="vendorId"
									className={`form-select dropdown ${errors.vendor?.name ? "is-invalid" : ""}`}
									{...register("vendorId", { required: "Please choose vendor(s)." })}
								>
									<option value="">Select vendor...</option>
									{vendors.map((vendor) => (
										<option className=" dropdown-item" key={vendor.id} value={vendor.id}>
											<>{vendor.name}</>
										</option>
									))}
								</select>
								<div className="invalid-feedback">{errors.vendor?.name?.message}</div>
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

export default RequestLineForm;
