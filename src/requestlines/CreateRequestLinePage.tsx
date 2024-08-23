import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import { requestAPI } from "./RequestAPI";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { Request } from "./Request";
import RequestLinesTable from "./RequestLinesTable";
import RequestForm from "./RequestForm";

function CreateRequestPage() {
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

	const save: SubmitHandler<Request> = async (request) => {
		try {
			if (request.isNew) {
				await requestAPI.post(request);
				toast.success("Success!");
				navigate("./requests");
			} else {
				await requestAPI.put(request);
				toast.success("Success!");
				navigate("./requests");
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<>
			<section>
				<div className="container-fluid bg-white">
					<div className="d-flex justify-content-between align-items-center m-0 px-1">
						<div className="m-0 fw-normal fs-5">Create Request</div>

						<div className="d-flex gap-3">
							{/* <button type="submit" className="btn btn-primary fw-light fs-6" onSubmit={handleSubmit(save)}>
							Send for Review
						</button> */}

							<Link to={`/requests`} className="btn btn-outline-primary fw-light fs-6">
								Cancel
							</Link>
						</div>
					</div>
					<hr />
					<RequestForm />
				</div>
				<hr></hr>
			</section>
		</>
	);
}
export default CreateRequestPage;
