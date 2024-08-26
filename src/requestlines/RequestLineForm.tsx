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

function RequestLineForm() {
	const navigate = useNavigate();
	let { requestLineId: requestLineIdAsString } = useParams<{ requestLineId: string }>();
	let { productId: productIdAsAString } = useParams<{ productId: string }>();
	let { requestId: requestIdAsAString } = useParams<{ requestId: string }>();

	let requestLineId = Number(requestLineIdAsString);
	let productId = Number(productIdAsAString);
	let requestId = Number(requestIdAsAString);

	const [products, setProducts] = useState<Product[]>([]);
	const [request, setRequest] = useState<Request | undefined>(undefined);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RequestLine>({
		defaultValues: async () => {
			let productData = await productAPI.list();
			// let requestData = await requestAPI.find(requestId);
			setProducts(productData);
			// setRequest(requestData);

			if (!requestLineId) {
				let newRequestLine = new RequestLine({ requestID: requestId });
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
				toast.success("Success!");
				navigate(`/requests/detail/${requestId}`);
			} else {
				await requestLineAPI.put(requestLine);
				toast.success("Success!");
				navigate(`/requests/detail/${requestId}`);
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};
	return (
		<>
			<div className="d-flex fw-normal fs-6">
				<form className="d-flex flex-wrap flex-row w-75" onSubmit={handleSubmit(saveRequestLine)} noValidate>
					<div className="d-flex row-1 gap-3 w-100">
						<div className="d-flex flex-column w-100">
							<label className="justify-items-end">{requestId}</label>
							{/* <input type="number" value={requestId}/> */}
							<label className="align-content-center form-label" htmlFor="productID">
								Product
							</label>
							<select
								id="productID"
								className={`form-select dropdown ${errors.product?.name ? "is-invalid" : ""}`}
								{...register("productID", { required: "Please choose a product" })}
							>
								<option value="">Select product...</option>
								{products.map((product) => (
									<option className=" dropdown-item" key={product.id} value={product.id}>
										<>{product.name}</>
									</option>
								))}
							</select>
							<div className="invalid-feedback">{errors.product?.name?.message}</div>
						</div>

						{/* <div className="d-flex flex-column w-100">
							<label
								id="productID"
								className={`form-item ${errors.product?.price ? "is-invalid" : ""}`}
								{...register("product.price", { required: "Please choose a product" })}
								htmlFor=""
							>
								Price
							</label>
							<div>Price</div>
							<div>{products.price}</div>
						</div> */}
					</div>

					<div className="pt-3 gap-3 row-2 d-flex flex-row w-100">
						<div className="d-flex flex-column">
							<label className="form-label" htmlFor="quantity">
								Quantity
							</label>
							<input
								className={`form-control ${errors.quantity ? "is-invalid" : ""}`}
								{...register("quantity", { required: "Price is required." })}
								type="text"
								id="quantity"
							/>
							<div className="invalid-feedback">{errors.quantity?.message}</div>
						</div>
					</div>

					<div className="pt-4 gap-3 row-5 d-flex flex-row w-100  justify-content-end ">
						<div className="d-flex gap-3 pt-3">
							<Link className="btn btn-outline-secondary fw-light fs-6 border" to={`/requests/detail/${requestId}`}>
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
