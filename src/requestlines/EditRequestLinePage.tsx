import { Link } from "react-router-dom";

function EditRequestLinePage() {
   <section className="container-fluid bg-white">
		<div className="d-flex justify-content-between align-items-center m-0 px-1">
			<div className="m-0 fw-normal fs-5">Add Item to Request</div>


			<div className="d-flex gap-3">
				<button type="submit" className="btn btn-primary fw-light fs-6">
					Save
				</button>

				<Link to={`.requests/detail/${3}`} className="btn btn-outline-primary fw-light fs-6">
					Cancel
				</Link>
			</div>


		</div>
	</section>
}

export default EditRequestLinePage