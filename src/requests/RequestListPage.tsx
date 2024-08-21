import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link } from "react-router-dom";
import RequestList from "./RequestList";

function RequestListPage() {
	return (
		<>
			<div>
				<section className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<p className="m-0 fw-normal fs-5">Requests</p>
						<Link className="btn btn-primary fw-light fs-6" to={"./create"}>
							+ Request
						</Link>
					</div>
					<hr />
					<div className="pt-2">
						<RequestList />
					</div>
				</section>
			</div>
		</>
	);
}

export default RequestListPage;
