import "bootstrap/dist/css/bootstrap.min.css";
import "../App";
import { Link, useNavigate, useParams } from "react-router-dom";
import { requestAPI } from "./RequestAPI";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { Request } from "../requests/Request";

function RequestForm() {
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
				let newRequest = new Request({ requestId: requestId });
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
				navigate(`/requests`);
			} else {
				await requestAPI.put(request);
				navigate(`/requests`);
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<>
			<div className="container-fluid bg-white">
				<div className="d-flex fw-normal fs-6">
					<form onSubmit={handleSubmit(save)} className="d-flex flex-wrap flex-row w-75 border-0">
						<div className="d-flex row-1 gap-3 w-100">
							<div className="d-flex flex-column w-100">
								<label className="form-label" htmlFor="name">
									Description
								</label>
								<input
									className={`form-control ${errors.description ? "is-invalid" : ""}`}
									{...register("description", { required: "Description is required." })}
									type="text"
									id="name"
								/>
							</div>
						</div>

						<div className="d-flex flex-column w-100">
							<label className="form-label" htmlFor="deliveryMode">
								Delivery Method
							</label>
							<input
								className={`form-control ${errors.deliveryMode ? "is-invalid" : ""}`}
								{...register("deliveryMode", { required: "Delivery Method is required." })}
								type="text"
								id="deliveryMode"
							/>
							<div className="invalid-feedback">{errors.deliveryMode?.message}</div>
						</div>

						<div className="pt-3 gap-3 row-2 d-flex flex-row w-100">
							<div className="d-flex flex-column">
								<label className="form-label w-100" htmlFor="justification">
									Justification
								</label>
								<input
									className={`form-control w-100 ${errors.justification ? "is-invalid" : ""}`}
									{...register("justification", { required: "Justification is required." })}
									type="text"
									id="justification"
								/>
								<div className="invalid-feedback">{errors.justification?.message}</div>
							</div>
						</div>

						<div className="pt-3 gap-3 row-2 d-flex flex-row w-100">
							<div className="d-flex flex-column">
								<label className="form-label" htmlFor="status">
									Status
								</label>
								<input
									className={`form-control ${errors.status ? "is-invalid" : ""}`}
									{...register("status", { required: "Status is required." })}
									type="text"
									id="status"
								/>
								<div className="invalid-feedback">{errors.status?.message}</div>
							</div>

							<div className="d-flex flex-column">
								<label className="form-label" htmlFor="userId">
									Requested By
								</label>
								<input
									className={`form-control ${errors.justification ? "is-invalid" : ""}`}
									{...register("userId", { required: "Justification is required." })}
									type="text"
									id="userId"
								/>
								<div className="invalid-feedback">{errors.userId?.message}</div>
								<div className="d-flex justify-content-end">
									<div className="py-4 d-flex align-content-end">
										<button type="submit" className="btn btn-primary fw-light fs-6" onSubmit={handleSubmit(save)}>
											Send for Review
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default RequestForm;
