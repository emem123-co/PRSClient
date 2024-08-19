import { useEffect, useState } from "react";
import { Product } from "./Product";
import { productAPI } from "./ProductAPI";
import { Link } from "react-router-dom";
import VendorList from "../vendors/VendorList";

function ProductList() {
	const [products, setProducts] = useState<Product[]>([]);
	const [busy, setBusy] = useState(false);

	

	async function loadProducts() {
		setBusy(true);
		let data = await productAPI.list();
		setProducts(data);
		setBusy(false);
	}

	useEffect(() => {
		loadProducts();
	}, []);

	return (
		<section className=" container-fluid bg-white d-flex flex-wrap gap-4">
			{busy && (
				<div className="d-flex justify-content-center align-items-center w-100 vh-100">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			)}

			{products.map((product) => (
				<div className="card p-4" key={product.id}>
					<strong>{product.name}</strong>
					<small>{product.price}</small> / <small>{product.unit}</small>
			
					
					
						{/* <small key={product.vendorId}>{Vendor.name}</small>  */}
						{/* <small className="Vendor" key={product.vendorId}>{Vendor.phone}</small>  */}
						
						


					<span>
						<Link to={`/products/edit/${product.id}`}>edit</Link> |{" "}
						<Link to={`/products/delete/${product.id}`}>delete</Link>
					</span>
				</div>
			))}
		</section>
	);
}

export default ProductList;
