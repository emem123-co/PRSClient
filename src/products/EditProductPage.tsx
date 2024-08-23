import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productAPI } from "./ProductAPI";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Product } from "././Product";
import ProductForm from "./ProductForm";
import toast from "react-hot-toast";
import { requestAPI } from "../requests/RequestAPI";

function EditProductPage() {
	let { productId: productIdAsString } = useParams<{ productId: string }>();
	let productId = Number(productIdAsString);
	const navigate = useNavigate();
	const [product, setProduct] = useState<Product[]> ([]);
	const [busy, setBusy] = useState(false);

	const {
		formState: {  },
	} = useForm<Product>({
		defaultValues: async () => {
			let productData = await productAPI.list();
			setProduct(productData);

			if (!productId) {
				let newProduct = new Product(productId);
				return Promise.resolve(newProduct);
			} else {
				return await productAPI.find(productId);
			}
		},
	});

	


	return (
		<>
			<div>
				<section className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<div className="m-0 fw-normal fs-5">Edit Product</div>
						<Link className="btn btn-outline-danger fw-normal fs-6" to="/products">
							Cancel
						</Link>
					</div>
					<hr />
					<div className="pt-2">
						<ProductForm />
						
					</div>
				</section>
			</div>
		</>
	);
}
export default EditProductPage;
