
import { Link, useNavigate, useParams, } from "react-router-dom";
import { useState, useEffect, MouseEventHandler, EventHandler } from "react";
import toast from "react-hot-toast";
import { requestAPI } from "./RequestAPI";
import { Request } from "./Request";
import RequestLinesTable from "../requestlines/RequestLinesTable";
import EditRequest from "./EditRequest";
import { SubmitHandler } from "react-hook-form";


function RequestDetailsPage() {
	let { requestId: requestIdAsAString } = useParams<{ requestId: string }>();
	const requestId = Number(requestIdAsAString);
	const [request, setRequest] = useState<Request | undefined>(undefined);
	const [busy, setBusy] = useState(false);
	const navigate = useNavigate();

	async function loadRequest() {
		try {
			if (!requestId) return;
			setBusy(true);
			const data = await requestAPI.find(requestId);
			setRequest(data);
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setBusy(false);
		}
	}

	useEffect(() => {
		loadRequest();
	}, []);

	const save: SubmitHandler<Request> = async (request) => {
		try {
			if (request.isNew) {
				await requestAPI.post(request);
				navigate(`/requests`);
			} else {
				await requestAPI.put(request);
				navigate(`/requests`);
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};


	async function  sendReview() {
			if (!request) return; 
			await requestAPI.review(request);
			navigate(`/requests`);
			
	}

	async function  approve() {
		if (!request) return; 
		await requestAPI.approve(request);
		navigate(`/requests`);
		
}


async function  reject() {
	if (!request) return; 
	await requestAPI.reject(request);
	navigate(`/requests`);
	
}
	return (
		<>
			<section>
				<div className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<div className="m-0 fw-normal fs-5">Request Details</div>
						<div className="d-flex gap-3">
							<button  type="button" className="btn btn-primary fw-light fs-6" onClick={sendReview}>
								Send for Review
							</button>

									<Link to="./edit" className="btn btn-outline-primary fw-light fs-6">
										Edit
									</Link>
						</div>

						<div className="d-flex gap-3">
							<button type="button" className="btn btn-success fw-light fs-6 " onClick={approve}>
								Approve
							</button>

							<button type="button" className="btn btn-danger fw-light fs-6" onClick={reject}>
								Reject
							</button>
							
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

							{/* {URL = http://localhost:5175/requests/detail/{requestID}/edit && 
							
							send for review & cancel buttons (in EditForm)
							<EditRequest /> 
							
							)} */}

							{requestId && (
								// {userId !=== request.userId && (
									
								// 	approve reject edit header)}

								// {userId === request.userId && (
									
								// 	edit header)}


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
							)}
								<RequestLinesTable requestLines={request?.requestlines} />
						</div>

					</div>
				</div>
			</section>
		</>
	)
}

export default RequestDetailsPage;

// onSubmit={handleSubmit(save)}
