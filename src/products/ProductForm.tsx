import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Product } from "./Product";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { productAPI } from "./ProductAPI";
import { Vendor } from "../vendors/Vendor";
import { vendorAPI } from "../vendors/VendorAPI";

function ProductForm() {
	//load vendors
	const [vendors, setVendors] = useState<Vendor[]>([]);
	let { vendorId: vendorIdAsString } = useParams<{ vendorId: string }>();
	let vendorId = Number(vendorIdAsString);
	const [busy, setBusy] = useState(false);

	async function loadVendors() {
		try {
			setBusy(true);
			let data = await vendorAPI.list();
			setVendors(data);
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setBusy(false);
		}
	}

	useEffect(() => {
		loadVendors();
	}, []);

	//product
	let { productID: productIDAsString } = useParams<{ productID: string }>();
	let productID = Number(productIDAsString);
	const [products, setProducts] = useState<Product[]>([]);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Product>({
		defaultValues: async () => {
			let productsData = await productAPI.list();
			setProducts(productsData);

			if (!productID) {
				let newProduct = new Product({ productID: productID });
				return Promise.resolve(newProduct);
			} else {
				return await productAPI.find(productID);
			}
		},
	});

	const saveProduct: SubmitHandler<Product> = async (product) => {
		try {
			if (product.isNew) {
				console.log(product);

				await productAPI.post(product);
				navigate("/products");
				toast.success("Success!");
			} else {
				await productAPI.put(product);
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
							<label className="form-label" htmlFor="name">
								Product Name
							</label>
							<input
								className={`form-control ${errors.name ? "is-invalid" : ""}`}
								{...register("name", { required: "Product name is required." })}
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
	)
}

export default ProductForm;
