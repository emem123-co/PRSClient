import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import RequestForm from "./RequestForm";
import { Link } from "react-router-dom";
import RequestLinesTable from "../requestlines/RequestLinesTable";

function EditRequestPage() {
	return (
		<>
			<div>
				<section className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<div className="m-0 fw-normal fs-5">Edit Request</div>
						<Link className="btn btn-outline-danger fw-normal fs-6" to="/requests/edit">
							Cancel
						</Link>
					</div>
					<hr />
					<div className="pt-2">
						<RequestForm />
					</div>
					<div>
					</div>
				</section>
			</div>
		</>
	);
}
export default EditRequestPage;
