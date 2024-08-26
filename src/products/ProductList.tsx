import { SyntheticEvent, useEffect, useState } from "react";
import { Product } from "./Product";
import { productAPI } from "./ProductAPI";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import ProductCard from "./ProductCard";



function ProductList() {
	const [products, setProducts] = useState<Product[]>([]);
	const [busy, setBusy] = useState(false);
	const navigate = useNavigate();
	


	

	async function loadProducts() {
		setBusy(true);
		let data = await productAPI.list();
		setProducts(data);
		setBusy(false);
	}
	
	useEffect(() => {
		loadProducts();
	}, []);

	
	async function removeProduct(product: Product) {
		if (confirm("Are you sure you want to delete this product?")) {
			if (product.id) {
				await productAPI.delete(product.id);
				let updatedProducts = products.filter((p) => p.id !== product.id);
				setProducts(updatedProducts);
				toast.success("Successfully deleted.");
				navigate("/products");
			}
		}
	}

	


	return (
		<section>
			<div>
				{busy && (
					<div className="d-flex justify-content-center align-items-center w-100 vh-100">
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				)}
			</div>
			<div className="container-fluid bg-white d-flex flex-wrap">
				<div className="card-group">
					{products.map((product) => (
						<div className="py-3">
							<ProductCard key={product.id} product={product} onRemove={removeProduct}/>
							</div>
					))}
				</div>
			</div>
		</section>
	);
}
export default ProductList;


