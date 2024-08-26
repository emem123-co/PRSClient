import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link } from "react-router-dom";

import RequestLineForm from "./RequestLineForm";

function CreateRequestLinePage() {
	

	return (
		<>
			<section>
				<div className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<div className="m-0 fw-normal fs-5">Add Items</div>

						<div className="d-flex gap-3">
							

							
						</div>
					</div>
					<hr />
					<RequestLineForm />
				</div>
				<hr></hr>
			</section>
		</>
	);
}
export default CreateRequestLinePage;
