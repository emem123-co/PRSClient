import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";

function ProductListPage() {
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
					<div className="pt-2">
						<ProductList />
					</div>
				</section>
			</div>
		</>
	);
}

export default ProductListPage;
