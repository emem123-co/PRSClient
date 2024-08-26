import { Link } from "react-router-dom";
import { Product } from "./Product";
import { SyntheticEvent } from "react";

interface ProductCardProps {
	product: Product;
	onRemove: (product: Product) => void;
}

function ProductCard({ product, onRemove }: ProductCardProps) {
	return (
		<div className="container-fluid bg-white d-flex flex-wrap">
			<div className="card p-3" key={product.id} style={{ width: "16rem", height: "10rem" }}>
				<div className="d-flex justify-content-between"></div>

				<div className="d-flex flex-column p-0 m-0 gap-1">
					<h5>{product.name}</h5>
					<small className="fw-semibold px-1 d-flex rounded-2 bg-dark text-white ">{product.vendor?.name}</small>
					<span>
						{product.price} / {product.unit}
					</span>
					<small className=" px-1 d-flex rounded-2 bg-body-secondary" style={{ width: 130 }}>
						{product.partNbr}
					</small>
					<span className=" d-flex gap-2">
						<Link to={`./edit/${product.id}`}>edit</Link>|
						<a
							className="card-link p-0"
							onClick={(event: SyntheticEvent) => {
								event.preventDefault();
								onRemove(product);
							}}
						>
							delete
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}
export default ProductCard;
