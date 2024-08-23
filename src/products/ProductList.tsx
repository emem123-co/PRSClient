import { useEffect, useState } from "react";
import { Product } from "./Product";
import { productAPI } from "./ProductAPI";
import { Link, useParams } from "react-router-dom";


function ProductList() {
	const [products, setProducts] = useState<Product[]>([]);
	const [busy, setBusy] = useState(false);
	
	let {productId: productIdAsAString } = useParams<{productId: string}>();
	let productId = Number(productIdAsAString);
	

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
		<div className="container-fluid bg-white d-flex flex-wrap gap-4">
			{products.map((product) => (
				<div className="card p-2" key={product.id}>
					<div className="d-flex flex-column">

					<strong>{product.name}</strong>
					<span>
						{product.price} / {product.unit}
					</span>

					<div className="d-flex flex-column p-0 m-0 gap-1">
						<small>{product.vendor?.name}</small> 
						<small className="d-flex justify-content-center rounded-2 text-bg-dark text-white" style={{width: 130}}>
							{product.partNbr}
						</small>
						<span className=" d-flex gap-2">
						<Link to={`./edit/${product.id}`}>edit</Link>|
						<Link to={`/products/delete/${product.id}`}>delete</Link>
						</span> 
					</div>
					</div>
				</div>
			))}
			;
		</div>
	);
}
export default ProductList;


