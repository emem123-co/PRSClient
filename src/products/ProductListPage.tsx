import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductList from "./ProductList";
import { Product } from "./Product";
import { useEffect, useState } from "react";
import { productAPI } from "./ProductAPI";
import toast from "react-hot-toast";

function ProductListPage() {
	// const [product, setProducts] = useState<Product[]>([]);
	// const [busy, setBusy] = useState(false);

	// let { productId: productIdAsAString } = useParams<{ productId: string }>();
	// let productId = Number(productIdAsAString);


	// async function loadProducts() {
	// 	setBusy(true);
	// 	let data = await productAPI.list();
	// 	setProducts(data);
	// 	setBusy(false);
	// }

	// useEffect(() => {
	// 	loadProducts();
	// }, []);

	return (
		<>
			<div>
				<section className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<p className="m-0 fw-normal fs-5">Product List</p>

						<Link className="btn btn-primary fw-light fs-6" to={"./create"}>
							+ Product
						</Link>
					</div>
					<hr />
				</section>
				<div className="pt-2">
					<ProductList />
				</div>
			</div>
		</>
	);
}

export default ProductListPage;
