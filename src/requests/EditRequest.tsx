import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import { requestAPI } from "./RequestAPI";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { Request } from "./Request";
import RequestLinesTable from "../requestlines/RequestLinesTable";
import RequestForm from "./RequestForm";

function EditRequest() {
	let { requestId: requestIdAsString } = useParams<{ requestId: string }>();
	let requestId = Number(requestIdAsString);
	const navigate = useNavigate();
	const [request, setRequest] = useState<Request[]>([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Request>({
		defaultValues: async () => {
			let requestData = await requestAPI.list();
			setRequest(requestData);

			if (!requestId) {
				let newRequest = new Request(requestId);
				return Promise.resolve(newRequest);
			} else {
				return await requestAPI.find(requestId);
			}
		},
	});

	
	return (
		<>
			<section className="container-fluid bg-white">
				<div className="d-flex justify-content-between align-items-center m-0 px-1">
					<div className="m-0 fw-normal fs-5">Edit Request</div>

					<div className="d-flex gap-3">
						

						<Link to={`/requests/detail/${requestId}`} className="btn btn-outline-primary fw-light fs-6">
							Cancel
						</Link>
					</div>
				</div>
				<hr />

				<div className="pt-2">
					<RequestForm />
				</div>
			</section>
		</>
	);
}
export default EditRequest;
