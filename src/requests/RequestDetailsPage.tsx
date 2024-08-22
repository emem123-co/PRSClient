//requestlinestable in body

//when request is new, add send for review button in the top right
//when request is in review, add approve / reject buttons on requests that dont belong to the currently logged in user
//if user owns request, add message that says you cannont review your own requests
//if user is not review, add message that says they dont have permission to review requests (or just disable approve/reject buttons)

//if reject button is clicked, add rejection reason
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { requestAPI } from "./RequestAPI";
import { Request } from "./Request";
import RequestDetails from "./RequestDetails";
import {  useForm, } from "react-hook-form";


function RequestDetailsPage() {
	const [requests, setRequests] = useState<Request[]>([]);
	const [busy, setBusy] = useState(false);
	const navigate = useNavigate();
	

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Request>({});

	async function loadRequest() {
		if (requests) {
			setBusy(true);
			let currentRequest = await requestAPI.find(Number());
			setRequests(currentRequest);
			setBusy(false);
			return currentRequest;
		}
	}

	useEffect(() => {
		loadRequest();
	}, []);

	
		

	async function sendReview(request:Request) {
	try {
		if (request.isNew) {
			await requestAPI.post(request);
			navigate("/detail");
				toast.success("Request submitted!");
		} else {
			await requestAPI.put(request)
		}
	} catch (error: any) {
		toast.error(error.message)
	}}


		

	return (
		<>
			<section className="container-fluid bg-white">
				<div className="d-flex justify-content-between align-items-center m-0 px-1">
					<div className="m-0 fw-normal fs-5">Request Details</div>
					<div className="d-flex gap-3">
						<button type="submit" className="btn btn-primary fw-light fs-6" onSubmit={handleSubmit(sendReview)}>
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
				<hr />

				<div className="p-2">
					<RequestDetails id={undefined} description={""} justification={""} rejectionReasoning={""} deliveryMode={""} status={""} userId={undefined} user={undefined} requestlines={undefined} isNew={false} />
				</div>
			</section>
		</>
	);
}

export default RequestDetailsPage;
