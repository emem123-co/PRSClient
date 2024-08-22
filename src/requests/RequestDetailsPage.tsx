//requestlinestable in body

//when request is new, add send for review button in the top right
//when request is in review, add approve / reject buttons on requests that dont belong to the currently logged in user
//if user owns request, add message that says you cannont review your own requests
//if user is not review, add message that says they dont have permission to review requests (or just disable approve/reject buttons)

//if reject button is clicked, add rejection reason
import { Link, useParams, } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { requestAPI } from "./RequestAPI";
import { Request } from "./Request";
import RequestLinesTable from "../requestlines/RequestLinesTable";


function RequestDetailsPage() {
	let { requestId: requestIdAsAString } = useParams<{ requestId: string }>();
	const requestId = Number(requestIdAsAString);
	const [requests, setRequests] = useState<Request[]>([]);
	const [busy, setBusy] = useState(false);
	const request = requests.find((request) => request.id === requestId);

	async function loadRequest(id: number) {
		try {
			if (requestId) return;
			setBusy(true);
			const data = await requestAPI.find(requestId);
			setRequests(data);
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setBusy(false);
		}
	}

	useEffect(() => {
		loadRequest(requestId);
	}, []);


	return (
		<>
			<section>
				<div className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<div className="m-0 fw-normal fs-5">Request Details</div>
						<div className="d-flex gap-3">
							<button type="submit" className="btn btn-primary fw-light fs-6">
								Send for Review
							</button>

							<Link to="./detail/edit/:id" className="btn btn-outline-primary fw-light fs-6">
								Edit
							</Link>
						</div>

						<div className="d-flex gap-3">
							<button type="submit" className="btn btn-success fw-light fs-6">
								Approve
							</button>

							<button type="submit" className="btn btn-danger fw-light fs-6">
								Reject
							</button>
							<Link to="/requests/detail/edit/:id" className="btn btn-outline-primary fw-light fs-6">
								Edit
							</Link>
						</div>
					</div>
				</div>
				<hr />
				<div className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						{busy && (
							<section className="container-fluid bg-white">
								<div className=" spinner-border text-primary" role="status">
									<span className="visually-hidden">Loading...</span>
								</div>
							</section>
						)}

						<div className="container container-fluid">
							<div className="d-flex p-2 gap-5 justify-content-start">
								<div className="d-flex flex-column gap-2">
									<div>Description</div>
									<small>{request?.description}</small>

									<div>Justification</div>
									<small>{request?.justification}</small>
								</div>

								<div className="d-flex flex-column gap-2">
									<div>Delivery Method</div>
									<small>{request?.deliveryMode}</small>

									<div>Status</div>
									<small>{request?.status}</small>
								</div>

								<div className="d-flex flex-column gap-2">
									<div>Requested By</div>
									<small>
										<span>
											{request?.user?.firstName}
											{request?.user?.lastName}
										</span>
									</small>
								</div>
							</div>
							<RequestLinesTable />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default RequestDetailsPage;