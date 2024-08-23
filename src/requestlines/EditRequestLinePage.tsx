import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import { requestLineAPI } from "./RequestLineAPI";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { RequestLine } from "./RequestLine";
import RequestLinesTable from "../requestlines/RequestLinesTable";
import RequestLineForm from "./RequestLineForm";

function EditRequestLinePage() {
	let { requestLineId: requestLineIdAsString } = useParams<{ requestLineId: string }>();
	let requestLineId = Number(requestLineIdAsString);
	const [requestLine, setRequestLine] = useState<RequestLine[]>([]);

	// let { requestId: requestIdAsString } = useParams<{ requestId: string }>();
	// let requestId = Number(requestLineIdAsString);
	// const [request, setRequest] = useState<Request[]>([]);

	const {
		formState: {  },
	} = useForm<RequestLine>({
		defaultValues: async () => {
			let requestLineData = await requestLineAPI.list();
			setRequestLine(requestLineData);

			if (!requestLineId) {
				let newRequest = new RequestLine(requestLineId);
				return Promise.resolve(newRequest);
			} else {
				return await requestLineAPI.find(requestLineId);
			}
		},
	});

	
	return (
		<>
			<section className="container-fluid bg-white">
				<div className="d-flex justify-content-between align-items-center m-0 px-1">
					<div className="m-0 fw-normal fs-5">Edit Line Item</div>

					<div className="d-flex gap-3">
						{/* <button type="submit" className="btn btn-primary fw-light fs-6" onSubmit={handleSubmit(save)}>
							Send for Review
						</button> */}

						<Link to={`/requests/detail/${requestLine.requestID}`} className="btn btn-outline-primary fw-light fs-6">
							Cancel
						</Link>
					</div>
				</div>
				<hr />

				<div className="pt-2">
					<RequestLineForm />
				</div>
			</section>
		</>
	);
}
export default EditRequestLinePage;
