import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import ProductForm from "./ProductForm";
import { Link } from "react-router-dom";

function EditProductPage() {
	return (
		<>
			<div>
				<section className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<div className="m-0 fw-normal fs-5">Edit Product</div>
						<Link className="btn btn-outline-danger fw-normal fs-6" to={"/products"}>
							Cancel
						</Link>
					</div>
					<hr />
					<div className="pt-2">
						{/* <ProductForm /> */}
						{/* copy in product form and place value={product.prop} attributes on the input tags to populate the current product */}
					</div>
				</section>
			</div>
		</>
	);
}
export default EditProductPage;
