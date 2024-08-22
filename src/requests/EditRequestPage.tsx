import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import RequestForm from "./RequestForm";
import { Link } from "react-router-dom";
import RequestLinesTable from "../requestlines/RequestLinesTable";
import {Request} from "../requests/Request";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { requestAPI } from "./RequestAPI";
import { SubmitHandler, useForm } from "react-hook-form";




function EditRequestPage() {
	const [requests, setRequests] = useState<Request[]>([]);
	const [busy, setBusy] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RequestForm>({});

	async function loadRequest() {
		if (request.id) {
			setBusy(true);
			let currentRequest = await requestAPI.find(request.id);
			setRequests(currentRequest);
			setBusy(false);
		}
	}

	useEffect(() => {
		loadRequest();
	}, []);

	async function editRequest(request: Request) {
		if (request.id) {
			await requestAPI.put(request);
			let newRequest = requests.filter((r) => r.id !== request.id);
			setRequests(newRequest);
			toast.success("Updated successfully!");
		}
	}
	return (
		<>
			<section className="container-fluid bg-white">
				<div className="d-flex justify-content-between align-items-center m-0 px-1">
					<div className="m-0 fw-normal fs-5">Request Details</div>

					<div className="d-flex gap-3">
						<button type="submit" className="btn btn-primary fw-light fs-6" onSubmit={handleSubmit(editRequest)}>
							Send for Review
						</button>

						<Link to="/requests/detail/:id" className="btn btn-outline-primary fw-light fs-6">
							Cancel
						</Link>
					</div>
				</div>
				<hr />

					<div className="pt-2">
						<RequestForm />
						<RequestLinesTable />
					</div>
			</section>
		</>
	);
}
export default EditRequestPage;
