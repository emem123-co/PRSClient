import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { requestAPI } from "./RequestAPI";
import { Request } from "./Request";
import RequestLinesTable from "../requestlines/RequestLinesTable";
import { RequestLine } from "../requestlines/RequestLine";
import { requestLineAPI } from "../requestlines/RequestLineAPI";

function RequestDetailsPage() {
	let { requestId: requestIdAsAString } = useParams<{ requestId: string }>();
	const requestId = Number(requestIdAsAString);
	const [request, setRequest] = useState<Request | undefined>(undefined);
	const [requestLines, setRequestLines] = useState<RequestLine | undefined>(undefined);
	const [busy, setBusy] = useState(false);
	const navigate = useNavigate();

	async function getRequestId() {
		let currentRequest = await requestAPI.find(requestId);
		setRequest(currentRequest);
	}

	useEffect(() => {
		getRequestId();
	}, []);

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

	async function removeRequestLine(requestLine: RequestLine) {
		if (confirm("Are you sure you want to delete this line item?")) {
			if (requestLine.id) {
				await requestLineAPI.delete(requestLine.id);
				toast.success("Successfully deleted.");
				let updatedRequestLines = request?.requestlines?.filter((rl) => rl.id !== requestLine.id);
				if (request) {
					setRequest({ ...request, requestlines: updatedRequestLines } as Request);
				}
			}
			navigate(`/requests/detail/${requestId}`);
		}
	}
	useEffect(() => {
		loadRequest();
	}, []);

	async function sendReview() {
		try {
			if (!request) return;
			await requestAPI.review(request);
			navigate(`/requests`);
		} catch (error: any) {
			toast.error(error.message);
		}
	}

	async function approve() {
		try {
			if (!request) return;
			await requestAPI.approve(request);
			navigate(`/requests`);
		} catch (error: any) {
			toast.error(error.message);
		}
	}

	async function reject() {
		try {
			if (!request) return;
			await requestAPI.reject(request);
			navigate(`/requests`);
		} catch (error: any) {
			toast.error(error.message);
		}
	}
	if (!request) return null;

	return (
		<>
			<section>
				<div className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<div className="m-0 fw-normal fs-5">Request Details</div>
						<div className="d-flex gap-3">
							<button type="button" className="btn btn-primary fw-light fs-6" onClick={sendReview}>
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
							{requestId && (
								<div className="d-flex ">
									<div className="d-flex p-2 gap-5 w-100">
										<div className="d-flex flex-column ">
											<div className="fw-bold ">Description</div>
											<small className="pb-3">{request?.description}</small>

											<div className="fw-bold ">Justification</div>
											<small className="pb-3">{request?.justification}</small>
										</div>

										<div className="d-flex flex-column ">
											<div className="fw-bold ">Delivery Method</div>
											<small className="pb-3">{request?.deliveryMode}</small>

											<div className="fw-bold ">Status</div>
											<small className="pb-3">{request?.status}</small>
										</div>
									</div>

									<div className="d-flex justify-content-end w-100">
										<div className="ps-5 d-flex flex-column">
											<div
												className="fw-bold border border-2 rounded-2 border-black text-bg-dark px-2 py-1 d-flex flex-column align-items-center justify-items-center"
												style={{ width: "9rem" }}
											>
												Requested By
												<small>
													<span className="d-flex pb-1 ps-1 fw-normal">
														{request?.user?.firstName} {request?.user?.lastName}
													</span>
												</small>
											</div>

											{/* <div className="pt-2 w-100">
												<div
													className="fw-bold border border-2 rounded-2 border-primary px-2 py-1 d-flex flex-column align-items-center justify-content-end w-100"
													style={{ width: "6rem" }}
												>
													Total<div className=" fw-normal">${request?.total}</div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							)}

							<RequestLinesTable requestLines={request?.requestlines} onRemove={removeRequestLine} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default RequestDetailsPage;
